import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query {
    getAllUsers {
      id,
      name,
      secondName,
      lastName,
      secondLastName,
      phone,
      email
      birthday
    }
  }
`