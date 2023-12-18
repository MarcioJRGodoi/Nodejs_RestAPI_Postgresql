import { Optional } from "sequelize";
import Employee, { EmployeeCreationAttributes } from "../Model/EmployeeModel";

const FindAll = async (): Promise<Employee[]> => {
    return await Employee.findAll();
}

const FindById = async (id: number): Promise<Employee | null> => {
    return await Employee.findByPk(id);
}

const Create = async (data: Optional<EmployeeCreationAttributes, "id">): Promise<Employee> => {
    return await Employee.create(data);
}

const Update = async (id: number, data: Optional<EmployeeCreationAttributes, "id">): Promise<[number, Employee[]]> => {
    return await Employee.update(data, {
        returning: true,
        where: {
            id: id
        }
    });
}

const Delete = async (id: number): Promise<number> => {
    return await Employee.destroy({
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

