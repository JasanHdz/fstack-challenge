import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import UserModel from '../../models/user'
import userType from '../typesDef/user'

export const CREATE_USER = {
  type: userType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    secondName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    secondLastName: { type: new GraphQLNonNull(GraphQLString) },
    birthday: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root: any, args: any) => {
    const { name, secondName, lastName, secondLastName, birthday, email, phone } = args
    const emailExist = await UserModel.findOne({
      where: { email }
    })
    if(emailExist) {
      throw new Error('Ya existe un usuario con el email: ' + email) 
    }
    const user = UserModel.build({ 
      name,
      secondName,
      lastName,
      secondLastName,
      birthday,
      phone,
      email
    })
    const newUser = await user.save()
    if(!newUser) {
      throw new Error('error al crear el nuevo usuario');
    }
    return newUser
  }
}

export const UPDATE_USER = {
  type: userType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }, 
    name: { type: GraphQLString },
    secondName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    secondLastName: { type: GraphQLString },
    birthday: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  },
  resolve: async (root: any, args: any) => {
    const { id, name, secondName, lastName, secondLastName, birthday, email, phone } = args
    const user = await UserModel.findByPk(id)
    if(!user) {
      throw new Error(`No existe un usuario con el id ${id}`);
    }
    await user.update({ 
      name,
      secondName,
      lastName,
      secondLastName,
      birthday,
      phone,
      email
    })
    return user
  }
}

export const DELETE_USER = {
  type: userType,
  args: {
    id: { type: GraphQLString }
  },
  resolve: async (root: any, args: any) => {
    const id = args.id
    const user = await UserModel.findByPk(id)
    if(!user) {
      throw new Error(`No existe un usuario con el id ${id}`);
    }
    await user.destroy()
    return user
  }
}