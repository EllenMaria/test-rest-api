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
  const { nome, telefone, email } = req.body;

  // const { id } = req.params;
  // const oldTatuador = await upTatuador(id);
  // const dataMolded = new TatuadorModel(
  //   id,
  //   nome || oldTatuador[0].NOME,
  //   email || oldUser[0].TELEFONE,
  //   senha || oldUser[0].EMAIL
  // );
  const { id } = req.params.id;
  try {
    const data = await upTatuador(req.body);
    res.status(201).json({ results: data, error: false });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
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
  // console.log(dataMolded);
  // const data = req.params.data;
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
