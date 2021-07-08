import dotEnv from 'dotenv'
dotEnv.config()

interface Iconf {
  port: string
  dbName: string
  dbUser: string
  dbPassword: string
  dbHost: string
}

export const config: Iconf = {
  port: process.env.PORT || '3001',
  dbName: process.env.DB_NAME || '',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || '',
  dbHost: process.env.DB_HOST || '',
}