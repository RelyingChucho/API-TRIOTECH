import { addTecnico, getTecnicos, getTecnico, deleteTecnico, updateTecnico } from "../controllers/tecnico.controller.js";

import { Router } from "express";

const tecnicoRouter = Router();

tecnicoRouter.get("/tecnicos/:id", getTecnico);

tecnicoRouter.get("/tecnicos", getTecnicos);

tecnicoRouter.post("/tecnicos", addTecnico);

tecnicoRouter.patch("/tecnicos/:id", updateTecnico);

tecnicoRouter.delete("/tecnicos/:id", deleteTecnico);

export default tecnicoRouter;
