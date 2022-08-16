import TatuadorModel from "../models/TatuadorModel.js";

import {
  getTatuadores,
  selectTatuador,
  insertTatuador,
  upTatuador,
  delTatuador,
} from "../models/TatuadorModel.js";

// import {
//   findAllTatuadores,
//   createTatuador,
//   findTatuador,
//   updateTatuador,
//   deleteTatuador,
// } from "../dao/TatuadorDAO.js";

const findAllTatuadores = async (req, res) => {
  try {
    const Tatuadores = await getTatuadores();
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const findTatuador = async (req, res) => {
  const id = req.params.id;
  try {
    const Tatuadores = await selectTatuador(id);
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const updateTatuador = async (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const { nome, telefone, email } = req.body;

  try {
    const oldTatuador = await selectTatuador(id);

    const data = new TatuadorModel(
      id,
      nome || oldTatuador[0].NOME,
      telefone || oldTatuador[0].TELEFONE,
      email || oldTatuador[0].EMAIL
    );

    console.log(oldTatuador);
    console.log(data);

    const Tatuadores = await upTatuador(data);
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

const deleteTatuador = async (req, res) => {
  try {
    const Tatuadores = await delTatuador(req.params.id);
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      erro: "true",
    });
  }
};

const createTatuador = async (req, res) => {
  const { nome, telefone, email } = req.body;

  try {
    const Tatuadores = await insertTatuador(req.body);
    res.status(201).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      erro: "true",
    });
  }
};

export default {
  findAllTatuadores,
  findTatuador,
  createTatuador,
  updateTatuador,
  deleteTatuador,
};
