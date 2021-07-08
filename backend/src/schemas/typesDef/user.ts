import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt } from 'graphql'

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    secondName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    secondLastName: { type: GraphQLString },
    birthday: { type: GraphQLString }, 
    date: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  })
})

export default userType