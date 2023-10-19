import { addMantenimiento, getMantenimientos, getMantenimiento, deleteMantenimiento, updateMantenimiento } from "../controllers/mantenimiento.controller.js";

import { Router } from "express";

const mantenimientoRouter = Router();

mantenimientoRouter.get("/mantenimientos/:id", getMantenimiento);

mantenimientoRouter.get("/mantenimientos", getMantenimientos);

mantenimientoRouter.post("/mantenimientos", addMantenimiento);

mantenimientoRouter.patch("/mantenimientos/:id", updateMantenimiento);

mantenimientoRouter.delete("/mantenimientos/:id", deleteMantenimiento);

export default mantenimientoRouter;
