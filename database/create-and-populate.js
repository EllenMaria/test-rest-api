import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database/database.db");

const CLIENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTS" (
    "CLIENT_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "CONTACT" varchar(100),
    "AGE" INT,
    "CITY" varchar(64)
);`;

const ADD_CLIENTS_DATA = `
INSERT INTO CLIENTS (CLIENT_ID, NAME, CONTACT, AGE, CITY)
VALUES 
    (1, 'Luiza da Silva Pereira', '(21) 98708-7261', '18', 'Rio de Janeiro'),
    (2, 'Lucas Nascimento de Sousa', '(88) 97431-0987', '25', 'Fortaleza'),
    (3, 'Marcela Goes Lima', '(21) 99723-8701', '40', 'Rio de Janeiro'),
    (4, 'Felipe Oliveira Júnior', '(11) 97653-8221', '33', 'São Paulo'),
    (5, 'João Ribeiro Lima', '(61) 9876-1281', '21', 'Brasília');
`;

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

function populateTableTatuador() {
  db.run(ADD_TATUADOR_DATA, (error) => {
    if (error) console.log("Error to populate table");
  });
}
function populateTableAgendamento() {
  db.run(ADD_AGENDAMENTO_DATA, (error) => {
    if (error) console.log("Error to populate table");
  });
}

function createTableCliente() {
  db.run(CLIENTS_SCHEMA, (error) => {
    if (error) console.log("Error to create clients table.");
  });
}

function populateTableCliente() {
  db.run(ADD_CLIENTS_DATA, (error) => {
    if (error) console.log("Error to populate clients table");
  });
}

db.serialize(() => {
  createTableTatuador();
  createTableAgendamento();
  createTableCliente();
  populateTableTatuador();
  populateTableCliente();
  populateTableAgendamento();
});
