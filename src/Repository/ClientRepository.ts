import Client from "../Model/ClinentModel";
import { ClientAttributes, ClientInstance } from '../Model/ClientInterface';
import { DestroyOptions } from 'sequelize';

const FindAll = async (): Promise<ClientInstance[]> => {
  return await Client.findAll();
}

const FindById = async (id: number): Promise<ClientInstance | null> => {
  return await Client.findByPk(id);
}

const Create = async (data: Partial<ClientInstance>): Promise<ClientInstance> => {
  return await Client.create(data);
}

const Update = async (id: number, data: Partial<ClientAttributes>): Promise<void> => {
    await Client.update(data, { 
        where: { id: id },
        fields: Object.keys(data) as (keyof ClientAttributes)[]
    });
}


  const Delete = async (id: number): Promise<void> => {
    const options: DestroyOptions = {
      where: {
        id: id
      }
    };
    await Client.destroy(options);
  }

export default {
  FindAll,
  FindById,
  Create,
   Update,
   Delete
}
