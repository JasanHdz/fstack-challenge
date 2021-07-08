import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser(
    $name: String!
    $secondName: String!
    $lastName: String!
    $secondLastName: String!
    $birthday: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      name: $name
      secondName: $secondName
      lastName: $lastName
      secondLastName: $secondLastName
      birthday: $birthday
      email: $email
      phone: $phone
    ) {
      id
      name
      secondName
      lastName
      secondLastName
      birthday
      email
      phone
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!, 
    $name: String
    $secondName: String
    $lastName: String
    $secondLastName: String
    $birthday: String
    $email: String
    $phone: String
  ) {
    updateUser(
      id: $id
      name: $name
      secondName: $secondName
      lastName: $lastName
      secondLastName: $secondLastName
      birthday: $birthday
      email: $email
      phone: $phone
    ) {
      id
      name
      lastName
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String) {
    deleteUser(id: $id) {
      name,
      lastName,
      id
    }
  }
`
