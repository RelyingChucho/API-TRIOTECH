import { addEquipo, getEquipos, getEquipo, deleteEquipo, updateEquipo } from "../controllers/equipo.controller.js";

import { Router } from "express";

const equipoRouter = Router();

equipoRouter.get("/equipos/:id", getEquipo);

equipoRouter.get("/equipos", getEquipos);

equipoRouter.post("/equipos", addEquipo);

equipoRouter.patch("/equipos/:id", updateEquipo);

equipoRouter.delete("/equipos/:id", deleteEquipo);

export default equipoRouter;
