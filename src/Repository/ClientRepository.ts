import { Optional } from 'sequelize';
import { ClientCreationAttributes } from '../Model/ClienttModel';
import Client from "../Model/ClienttModel";

const FindAll = async (): Promise<Client[]> => {
    return await Client.findAll();
}

const FindById = async (id: number): Promise<Client | null> => {
    return await Client.findByPk(id);
}

const Create = async (data: Optional<ClientCreationAttributes, "id">): Promise<Client> => {
    return await Client.create(data);
}

const Update = async (id: number, data: Partial<ClientCreationAttributes>): Promise<[number, Client[]]> => {
  return await Client.update(data, {
      returning: true,
      where: {
          id: id
      }
  });
}

const Delete = async (id: number): Promise<number> => {
    return await Client.destroy({
        where: {
            id: id
        }
    });
}

export default {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}
