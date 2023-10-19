import { addClient, getClients, getClient, deleteClient, updateClient } from "../controllers/cliente.controller.js";

import { Router } from "express";

const clientRouter = Router();

clientRouter.get("/clients/:id", getClient);

clientRouter.get("/clients", getClients);

clientRouter.post("/clients", addClient);

clientRouter.patch("/clients/:id", updateClient);

clientRouter.delete("/clients/:id", deleteClient);

export default clientRouter;
