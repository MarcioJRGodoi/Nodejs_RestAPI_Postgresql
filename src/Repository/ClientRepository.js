const client = require("../Model/ClinentModel")();

const FindAll = async () => {
    return await client.findAll();
}

const FindById = async (id) => {
    return await client.findByPk(id);
}

const Create = async (data) => {
    return await client.create(data);
}

const Update = async (id, data) => {
    return await client.update(data, {
        where: {
            id: id
        }
    });
}

const Delete = async (id) => {
    return await client.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}