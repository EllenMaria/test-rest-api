import AgendamentoModel from "../models/AgendamentoModel.js";

import {
  findAllAgendamentosD,
  createAgendamentoD,
  findAgendamentoD,
  updateAgendamentoD,
  deleteAgendamentoD,
} from "../dao/AgendamentoDAO.js";

// import {
//   findAllTatuadores,
//   createTatuador,
//   findTatuador,
//   updateTatuador,
//   deleteTatuador,
// } from "../dao/TatuadorDAO.js";

const createAgendamento = async (req, res) => {
  const { descricao, data, horario, tatuador_id, cliente_id, preco } = req.body;

  const dataMolded = new AgendamentoModel(
    descricao,
    data,
    horario,
    tatuador_id,
    cliente_id,
    preco
  );

  try {
    const Agendamentos = await createAgendamentoD(dataMolded);
    res.status(201).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findAllAgendamentos = async (req, res) => {
  try {
    const Agendamentos = await findAllAgendamentosD();
    res.status(200).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findAgendamento = async (req, res) => {
  const id = req.params.id;
  try {
    const Agendamentos = await findAgendamentoD(id);
    res.status(200).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const updateAgendamento = async (req, res) => {
  const { descricao, data, horario, tatuador_id, cliente_id, preco } = req.body;
  const { id } = req.params;

  // const { id } = req.params;
  try {
    const oldAgendamento = await updateAgendamentoD(id);
    const dataMolded = new AgendamentoModel(
      id,
      descricao || oldAgendamento[0].DESCRICAO,
      data || oldAgendamento[0].DATA,
      horario || oldAgendamento[0].HORARIO,
      tatuador_id || oldAgendamento[0].TATUADOR_ID,
      cliente_id || oldAgendamento[0].CLIENTE_ID,
      preco || oldAgendamento[0].PRECO
    );

    const data = await upTatuador(dataMolded);
    res.status(201).json({ results: data, error: false });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      erro: "true",
    });
  }
};

const deleteAgendamento = async (req, res) => {
  try {
    const Agendamentos = await deleteAgendamentoD(req.params.id);
    res.status(200).json({ Agendamentos });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      erro: "true",
    });
  }
};

export default {
  findAllAgendamentos,
  createAgendamento,
  updateAgendamento,
  findAgendamento,
  deleteAgendamento,
};
