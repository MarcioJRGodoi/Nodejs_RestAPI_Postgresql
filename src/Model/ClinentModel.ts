import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db';
import { ClientInstance } from './ClientInterface';

const Client: ClientInstance = sequelize.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6,16]
    }
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Client;
