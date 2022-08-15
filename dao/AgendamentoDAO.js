import db from "../database/dbconfig.js";

const findAllAgendamentos = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM AGENDAMENTO", (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const createAgendamento = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO TAREFAS(id, descricao, data, horario, tatuador_id, preco) VALUES (?,?,?,?,?,?)`,
      [
        model.id,
        model.descricao,
        model.data,
        model.horario,
        model.tatuadorId,
        model.preco,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};

const updateAgendamento = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE AGENDAMENTO 
            SET DESCRICAO = ?, DATA = ?, HORARIO = ?, PRECO = ?  
              WHERE ID = ? AND TATUADOR_ID = ?`,

      [
        model.id,
        model.descricao,
        model.data,
        model.horario,
        model.tatuadorId,
        model.preco,
      ],
      (erro) => {
        if (erro) {
          reject(erro.message);
        } else {
          resolve(model);
        }
      }
    );
  });
};

const findAgendamento = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM AGENDAMENTO WHERE ID = ?`, id, (erro, rows) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve(rows);
      }
    });
  });
};

const deleteAgendamento = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM AGENDAMENTO WHERE ID = ?`, id, (erro) => {
      if (erro) {
        reject(erro.message);
      } else {
        resolve("Agendamento Removido!");
      }
    });
  });
};

export {
  findAllAgendamentos,
  createAgendamento,
  findAgendamento,
  updateAgendamento,
  deleteAgendamento,
};
