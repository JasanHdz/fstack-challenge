import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { GET_ALL_USERS, GET_USER_BY_ID } from './queries/user'
import { CREATE_USER, UPDATE_USER, DELETE_USER } from './mutations/user'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER_BY_ID
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: CREATE_USER, 
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER
  }
})

const UserSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

export default UserSchema