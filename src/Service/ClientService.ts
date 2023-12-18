import { Optional } from "sequelize";
import { ClientCreationAttributes } from "../Model/ClienttModel";
import clientContext from "../Repository/ClientRepository";

const FindAll = async () => {
    return await clientContext.FindAll();
}

const FindById = async (id: number) => {
    return await clientContext.FindById(id);
}

const Create = async (data: Optional<ClientCreationAttributes, "id">) => {
    return await clientContext.Create(data);
}

const Update = async (id: number,data: Partial<ClientCreationAttributes>) => {
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