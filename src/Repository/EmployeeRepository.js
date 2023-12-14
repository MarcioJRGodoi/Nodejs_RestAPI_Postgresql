const employee = require("../Model/EmployeeModel")();

const FindAll = async () => {
    return await employee.findAll();
}

const FindById = async (id) => {
    return await employee.findByPk(id);
}

const Create = async (data) => {
    return await employee.create(data);
}

const Update = async (id, data) => {
    return await employee.update(data, {
        where: {
            id: id
        }
    });
}

const Delete = async (id) => {
    return await employee.destroy({
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

