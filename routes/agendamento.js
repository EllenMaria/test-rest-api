import { Router } from "express";

import AgendamentoController from "../controllers/AgendamentoController.js";

const agendamentoRouter = Router();

agendamentoRouter.post(
  "/agendamento/tatuador/:id",
  AgendamentoController.createAgendamento
);

agendamentoRouter.get(
  "/agendamentos",
  AgendamentoController.findAllAgendamentos
);
agendamentoRouter.get(
  "/agendamento/:id",
  AgendamentoController.findAgendamento
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
