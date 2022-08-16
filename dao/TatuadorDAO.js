import db from "../database/dbconfig.js";

const createTatuadorD = (data) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO TATUADOR(ID, NOME, TELEFONE, EMAIL) VALUES (?,?,?,?)`,
      [data.ID, data.NOME, data.TELEFONE, data.EMAIL],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const findAllTatuadoresD = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM TATUADOR", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const findTatuadorD = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM TATUADOR WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const updateTatuadorD = (data) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE TATUADOR SET NOME = ?, TELEFONE = ?, EMAIL = ? WHERE ID = ?`,
      [data.id, data.NOME, data.TELEFONE, data.EMAIL],
      (erro, rows) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(rows);
        }
      }
    );
  });
};

const deleteTatuadorD = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM TATUADOR WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Tatuador Removido!");
      }
    });
  });
};

export {
  findAllTatuadoresD,
  createTatuadorD,
  findTatuadorD,
  updateTatuadorD,
  deleteTatuadorD,
};
