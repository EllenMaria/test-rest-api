import db from "../database/dbconfig.js";

const findAllAgendamentosD = () => {
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

const createAgendamentoD = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO TAREFAS(ID, DESCRICAO, DATA, HORARIO, TATUADOR_ID, CLIENTE_ID, PRECO) VALUES (?,?,?,?,?,?,?)`,
      [
        model.id,
        model.descricao,
        model.data,
        model.horario,
        model.tatuadorId,
        model.clienteId,
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

const updateAgendamentoD = (model) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE AGENDAMENTO 
            SET DESCRICAO = ?, DATA = ?, HORARIO = ?, PRECO = ?  
              WHERE ID = ? AND TATUADOR_ID = ? AND CLIENTE_ID = ?`,

      [
        model.id,
        model.descricao,
        model.data,
        model.horario,
        model.tatuadorId,
        model.clienteId,
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

const findAgendamentoD = (id) => {
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

const deleteAgendamentoD = (id) => {
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
  findAllAgendamentosD,
  createAgendamentoD,
  findAgendamentoD,
  updateAgendamentoD,
  deleteAgendamentoD,
};
