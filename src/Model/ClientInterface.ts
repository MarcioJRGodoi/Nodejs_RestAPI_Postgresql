import { Model, Optional } from 'sequelize';

export interface ClientAttributes {
  id: number;
  name: string;
  email: string;
  login: string;
  password: string;
  phone: number;
}

interface ClientCreationAttributes extends Optional<ClientAttributes, 'id'> {}

export interface ClientInstance extends Model<ClientAttributes, ClientCreationAttributes> {
    create(data: Partial<ClientInstance>): Promise<ClientInstance>;
    findByPk(id: number): Promise<ClientInstance | null>;
    findAll(): Promise<ClientInstance[]>;
}
