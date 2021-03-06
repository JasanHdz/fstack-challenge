import { Sequelize } from 'sequelize'
import { config } from '../config'

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  define: {
    freezeTableName: true
  }
  // logging: false
})

export default db