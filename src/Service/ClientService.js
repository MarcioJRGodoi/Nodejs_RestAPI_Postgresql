const clientContext = require("../Repository/ClientRepository");

const FindAll = async () => {
    return await clientContext.FindAll();
}

const FindById = async (id) => {
    return await clientContext.findByPk(id);
}

const Create = async (data) => {
    return await clientContext.Create(data);
}

const Update = async (id, data) => {
    return await clientContext.Update(id, data);
}

const Delete = async (id) => {
    return await clientContext.Delete(id);
}

module.exports = {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}