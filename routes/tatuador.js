import { Router } from "express";

import TatuadorController from "../controllers/TatuadorController.js";

const tatuadorRouter = Router();

tatuadorRouter.post("/tatuador", TatuadorController.createTatuador);
tatuadorRouter.get("/tatuadores", TatuadorController.findAllTatuadores);
tatuadorRouter.get("/tatuador/:id", TatuadorController.findTatuador);
tatuadorRouter.put("/tatuador/:id", TatuadorController.updateTatuador);
tatuadorRouter.delete("/tatuadores/:id", TatuadorController.deleteTatuador);

export { tatuadorRouter };
