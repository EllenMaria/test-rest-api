import { Router } from "express";

import TatuadorController from "../controllers/TatuadorController.js";

const tatuadorRouter = Router();

tatuadorRouter.post("/tatuador", TatuadorController.createTatuador); //OK
tatuadorRouter.get("/tatuadores", TatuadorController.findAllTatuadores); // OK
tatuadorRouter.get("/tatuador/:id", TatuadorController.findTatuador); // OK
tatuadorRouter.put("/tatuador/:id", TatuadorController.updateTatuador);
tatuadorRouter.delete("/tatuador/:id", TatuadorController.deleteTatuador); //OK

export { tatuadorRouter };
