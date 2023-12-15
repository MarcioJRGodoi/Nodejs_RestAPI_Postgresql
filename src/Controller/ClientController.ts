import clientService from "../Service/ClientService";
import { Request, Response } from 'express';

const FindAll = async (req: Request, res: Response) => {
    try{
        const clients = await clientService.FindAll();
        res.status(200).json(clients);
    }catch(err){
        res.status(500).json(err);
    }
}

const FindById = async (req: Request, res: Response) => {
    try{
        const id = Number(req.params.id);
        const client = await clientService.FindById(id);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Create = async (req: Request, res: Response) => {
    try{
        const client = await clientService.Create(req.body);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Update = async (req: Request, res: Response) => {
    try{
        const client = await clientService.Update(Number(req.params.id),req.body);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Delete = async (req: Request, res: Response) => {
    try{
        const client = await clientService.Delete(Number(req.params.id));
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

export default {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}