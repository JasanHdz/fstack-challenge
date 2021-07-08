import { GraphQLList, GraphQLString } from 'graphql'
import userModel from '../../models/user'
import userType from '../typesDef/user'

export const GET_ALL_USERS = {
  type: new GraphQLList(userType),
  resolve: async () => {
    const users = await userModel.findAll()
    if(!users) throw new Error('error while fetching data')
    return users
  }
}

export const GET_USER_BY_ID = {
  type: userType,
  description: "Esté query regresa a un usuario por su id",
  args: { 
    id: { type: GraphQLString }
  },
  resolve: async (parent: any, args: any) => {
    const id = args.id
    const user = await userModel.findByPk(id)
    if(!user) throw new Error(`No existe el usuario con el id ${id}`)
    return user
  }
}