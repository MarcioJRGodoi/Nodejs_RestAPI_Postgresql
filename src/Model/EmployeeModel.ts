import { Model, Optional, DataTypes } from 'sequelize';
import { sequelize } from '../db/db';

interface EmployeeAttributes {
  id: number;
  name: string;
  email: string;
  login: string;
  password: string;
}

export interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, 'id'> {}

class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> {}

Employee.init({
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
}, {
  sequelize,
  tableName: 'employees',
});

export default Employee;
