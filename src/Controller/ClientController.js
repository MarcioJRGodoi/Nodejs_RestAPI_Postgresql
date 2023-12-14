const clientService = require("../Service/ClientService");

const FindAll = async (req, res) => {
    try{
        const clients = await clientService.FindAll();
        res.status(200).json(clients);
    }catch(err){
        res.status(500).json(err);
    }
}

const FindById = async (req, res) => {
    try{
        const client = await clientService.FindById(req.params.id);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Create = async (req, res) => {
    try{
        const client = await clientService.Create(req.body);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Update = async (req, res) => {
    try{
        const client = await clientService.Update(req.params.id, req.body);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

const Delete = async (req, res) => {
    try{
        const client = await clientService.Delete(req.params.id);
        res.status(200).json(client);
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    FindAll,
    FindById,
    Create,
    Update,
    Delete
}