import { DataTypes } from 'sequelize'
import db from '../db/connection'

const UserModel = db.define('users_test_jasanhdz', {
  name: { type: DataTypes.STRING },
  secondName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  secondLastName: { type: DataTypes.STRING },
  birthday: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER },
})

export default UserModel