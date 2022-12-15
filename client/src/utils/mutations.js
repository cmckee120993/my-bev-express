import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser (
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
             _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
 mutation AddOrder($orderOwner: String!, $deliveryDate: String!) {
  addOrder(orderOwner: $orderOwner, deliveryDate: $deliveryDate) {
    _id
    purchaseDate
    deliveryDate
    orderOwner
    products {
      _id
      name
      price
      quantity
    }
  }
}
`;