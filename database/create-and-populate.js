import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/database.db");

const TATUADOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TATUADOR" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "TELEFONE" varchar(100),
    "EMAIL" varchar(100)
);`;

const ADD_TATUADOR_DATA = `
INSERT INTO TATUADOR (ID, NOME, TELEFONE, EMAIL)
VALUES 
    (1, 'Luiza da Silva Pereira', '(21) 98708-7261', 'email@gmail.com'),
    (2, 'Lucas Nascimento de Sousa', '(88) 97431-0987', 'email@gmail.com'),
    (3, 'Marcela Goes Lima', '(21) 99723-8701', 'email@gmail.com')`;

//descricao, data, horario, tatuadorId, clienteId, preco
const AGENDAMENTO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "AGENDAMENTO" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "DESCRICAO" VARCHAR(100),
  "DATA" DATE,
  "HORARIO" VARCHAR(5),
  "TATUADOR_ID" INTEGER,
  "CLIENTE_ID" INTEGER,
  "PRECO" DECIMAL,
  FOREIGN KEY(TATUADOR_ID) REFERENCES TATUADOR(ID),
  FOREIGN KEY(CLIENTE_ID) REFERENCES CLIENTE(ID)
  )`;

const ADD_AGENDAMENTO_DATA = `
  INSERT INTO AGENDAMENTO (ID, DESCRICAO, DATA, HORARIO, TATUADOR_ID, CLIENTE_ID, PRECO)
  VALUES
      (1, 'Tatuagem Colorida', '17-02-2022', '08:30', '1', '1', '750'),
      (2, 'Tatuagem Old School', '20-02-2022', '13:30', '2', '2', '900')`;

function createTableTatuador() {
  db.run(TATUADOR_SCHEMA, (error) => {
    if (error) console.log("Error to create tables.");
  });
}
function createTableAgendamento() {
  db.run(AGENDAMENTO_SCHEMA, (error) => {
    if (error) console.log("Error to create tables.");
  });
}

function populateTable() {
  db.run(ADD_TATUADOR_DATA, (error) => {
    if (error) console.log("Error to populate table");
  });
}
function populateTableAgendamento() {
  db.run(ADD_AGENDAMENTO_DATA, (error) => {
    if (error) console.log("Error to populate table");
  });
}

db.serialize(() => {
  createTableTatuador();
  createTableAgendamento();
  populateTable();
  populateTableAgendamento();
});
