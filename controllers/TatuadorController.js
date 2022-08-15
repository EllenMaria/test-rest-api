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
  const { id } = req.params;
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
  const { id } = req.params;
  try {
    const Tatuadores = await upTatuador(id);
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      erro: "true",
    });
  }
};

const deleteTatuador = async (req, res) => {
  const { id } = req.params;
  try {
    const Tatuadores = await delTatuador(id);
    res.status(200).json({ Tatuadores });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      erro: "true",
    });
  }
};

const createTatuador = async (req, res) => {
  const data = req.params.data;
  try {
    const Tatuadores = await insertTatuador(data);
    res.status(200).json({ Tatuadores });
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
