import { gql } from '@apollo/client';


export const userLogin = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
      
    }
  }
}
`;

export const addUSER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          authors
          description
          image
          link
        }
        
      }
    }
  }
`;

export const saveBook = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      username
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
      bookCount
    }
  }
`;


export const removeBook = gql`
	mutation removeBook($bookId: String!) {
		removeBook(bookId: $bookId) {
			_id
			username
			savedBooks {
				bookId
				title
				authors
				description
				image
				link
			}
			bookCount
		}
	}
`;