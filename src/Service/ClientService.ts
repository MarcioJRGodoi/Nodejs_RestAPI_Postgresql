import { ClientAttributes, ClientInstance } from "../Model/ClientInterface";
import clientContext from "../Repository/ClientRepository";

const FindAll = async () => {
    return await clientContext.FindAll();
}

const FindById = async (id: number) => {
    return await clientContext.FindById(id);
}

const Create = async (data: Partial<ClientInstance>) => {
    return await clientContext.Create(data);
}

const Update = async (id: number,data: Partial<ClientAttributes>) => {
    return await clientContext.Update(id, data);
}

const Delete = async (id: number) => {
    return await clientContext.Delete(id);
}

export default {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}