import Employee, { EmployeeCreationAttributes } from "../Model/EmployeeModel"
import employeeContext from "../Repository/EmployeeRepository"

const FindAll = async (): Promise<Employee[]> => {
  const employee = await employeeContext.FindAll()
  return employee
}

const FindById = async (id: number): Promise<Employee | null> => {
  const employee = await employeeContext.FindById(id)
  return employee
}

const Create = async (data: EmployeeCreationAttributes) => {
  const employee = await employeeContext.Create(data)
  return employee
}

const Update = async (id: number, data: EmployeeCreationAttributes) => {
  const employee = await employeeContext.Update(id, data)
  return employee
}

const Delete = async (id: number) => {
  const employee = await employeeContext.Delete(id)
  return employee
}

export default {
  FindAll,
  FindById,
  Create,
  Update,
  Delete
}