const employeeContext = require("../Repository/EmployeeRepository")

const FindAll = async () => {
  const employee = await employeeContext.FindAll()
  return employee
}

const FindById = async (id) => {
  const employee = await employeeContext.FindById(id)
  return employee
}

const Create = async (data) => {
  const employee = await employeeContext.Create(data)
  return employee
}

const Update = async (id, data) => {
  const employee = await employeeContext.Update(id, data)
  return employee
}

const Delete = async (id) => {
  const employee = await employeeContext.Delete(id)
  return employee
}

module.exports = {
  FindAll,
  FindById,
  Create,
  Update,
  Delete
}