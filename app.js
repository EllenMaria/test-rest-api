import express from "express";

import { tatuadorRouter } from "./routes/tatuador.js";
// import { agendamentoRouter } from "./routes/agendamento.js";

const app = express();

app.use(express.json());

app.use(tatuadorRouter);

// app.use(tatuadorRouter, agendamentoRouter);

app.listen(4000, () => {
  console.log("Server running: http://localhost:4000");
});
