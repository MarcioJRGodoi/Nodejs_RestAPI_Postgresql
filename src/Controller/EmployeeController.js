const employeeService = require("../Service/EmployeeService");

const FindAll = async (req, res) => {
   try {
    const employee = await employeeService.FindAll()
    return res.status(200).json(employee);
   }catch(e) {
    console.log(e);
   }
}

const FindById = async (req, res) => {
    try {
        const employee = await employeeService.FindById(req.params.id)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

const Create = async (req, res) => {
    try {
        const employee = await employeeService.Create(req.body)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

const Update = async (req, res) => {
    try {
        const employee = await employeeService.Update(req.params.id, req.body)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

const Delete = async (req, res) => {
    try {
        const employee = await employeeService.Delete(req.params.id)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

module.exports = {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}