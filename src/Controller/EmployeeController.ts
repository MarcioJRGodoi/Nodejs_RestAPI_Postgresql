import employeeService from "../Service/EmployeeService";
import { Request, Response } from 'express';

const FindAll = async (req: Request, res: Response) => {
   try {
        const employee = await employeeService.FindAll();
        return res.status(200).json(employee);
   }catch(e) {
        res.status(500).json(e);
   }
}

const FindById = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const employee = await employeeService.FindById(Number(req.params.id))
        if(employee !== null) {
            return res.status(200).json(employee);
        }
        return res.status(404).json("User not found");
    }catch(e) {
        console.log(e);
    }
}

const Create = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const employee = await employeeService.Create(req.body)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

const Update = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const employee = await employeeService.Update(Number(req.params.id), req.body)
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

const Delete = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {
        const employee = await employeeService.Delete(Number(req.params.id))
        return res.status(200).json(employee);
    }catch(e) {
        console.log(e);
    }
}

export default {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}