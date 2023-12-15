import employee from "../Model/EmployeeModel";

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

export default {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}

