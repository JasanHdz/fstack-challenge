import express, { Application } from 'express'
import cors from 'cors'
import db from '../db/connection'
import { graphqlHTTP } from 'express-graphql'
import UserSchema from '../schemas/user'
import { config } from '../config'
import path from 'path'

class Server {
  private app: Application
  private port: string
  private apiPaths = {
    users: '/graphql'
  }
  constructor() {
    this.app = express()
    this.port = config.port
    this.dbConnection()
    this.middlewares()
    this.routes()
  }

  routes() {
    this.app.use(this.apiPaths.users, graphqlHTTP({
      schema: UserSchema,
      graphiql: true,
    }))
  }

  async dbConnection() {
    try {
      await db.authenticate()
      console.log('Database online')
    } catch(error) {
      throw new Error(error)
    }
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.static(path.join(__dirname, '../public')))
    this.app.use(express.json())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor Corriendo en puerto http://localhost:${this.port}`)
    })
  }
}

export default Server