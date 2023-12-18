import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../db/db';

export interface ClientAttributes {
  id: number;
  name: string;
  email: string;
  login: string;
  password: string;
  phone: number;
}

export interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

class Client extends Model<ClientAttributes, ClientCreationAttributes> {}

Client.init({
  id: {
    type: DataTypes.NUMBER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
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
  },
}, {
  sequelize,
  tableName: 'clients',
});

export default Client;
