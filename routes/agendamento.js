import { Router } from "express";

import AgendamentoController from "../controllers/AgendamentoController";

const agendamentoRouter = Router();

agendamentoRouter.post(
  "/agendamento/tatuador/:id",
  AgendamentoController.createAgendamento
);
agendamentoRouter.get(
  "/agendamentos",
  AgendamentoController.findAllAgendamentos
);
agendamentoRouter.put(
  "/agendamento/:id",
  AgendamentoController.updateAgendamento
);
agendamentoRouter.delete(
  "/agendamento/:id",
  AgendamentoController.deleteAgendamento
);

export { agendamentoRouter };
