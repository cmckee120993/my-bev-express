const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Product {
    name: String
    price: Float
    quantity: Int
  }

  type Order {
    _id: ID
    purchaseDate: String
    deliveryDate: String
    orderOwner: String
    products: [Product]
    orderTotal: Float
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    orders: [Order]
    order(_id: ID!): Order
    users: [User]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(orderOwner: String!, deliveryDate: String!): Order
    addToOrder(orderId: ID!, name: String!, price: Int!, quantity: Int!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    removeFromOrder(orderId: ID!, productId: ID!): Order
  }
`;

module.exports = typeDefs;
