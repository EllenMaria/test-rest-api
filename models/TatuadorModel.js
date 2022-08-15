import {
  findAllTatuadoresD,
  createTatuadorD,
  findTatuadorD,
  updateTatuadorD,
  deleteTatuadorD,
} from "../dao/TatuadorDAO.js";

class Tatuador {
  constructor(id, nome, idade, email, cidade) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.cidade = cidade;
  }
}

export const getTatuadores = async () => {
  try {
    const data = await findAllTatuadoresD();
    if (!data) throw new Error("Não foi possível encontrar os clientes!");
    return data;
  } catch (error) {
    throw error;
  }
};

export const selectTatuador = async (id) => {
  try {
    const data = await findTatuadorD(id);
    if (!data) throw new Error("Não foi possível encontrar os clientes!");
    return d;
  } catch (error) {
    throw error;
  }
};

export const insertTatuador = async (data) => {
  try {
    const d = await createTatuadorD(data);
    if (!data) throw new Error("Não foi possível inserir os dados!");
    return data;
  } catch (error) {
    throw error;
  }
};

export const upTatuador = async (id) => {
  try {
    const data = await updateTatuadorD(id);
    if (!data)
      throw new Error("Não foi possível fazer a atualização dos seus dados!");
    return data;
  } catch (error) {
    throw error;
  }
};

export const delTatuador = async (id) => {
  try {
    const data = await deleteTatuadorD(id);
    if (!data) throw new Error("Não foi possível deletar os seus dados!");
    return data;
  } catch (error) {
    throw error;
  }
};
