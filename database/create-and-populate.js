import { sqlite3 } from "sqlite3";

const db = new sqlite3.Database("./database.db");

const TATUADOR_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TATUADOR" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(100),
    "TELEFONE" varchar(20),
    "EMAIL" varchar(100)
);`;

const ADD_TATUADOR_DATA = `
INSERT INTO CLIENTS (ID, NOME, TELEFONE, EMAIL)
VALUES
    (1, 'João Carlos Souza', '(75) 98708-7221', 'joaocarlos@gmail.com'),
    (2, 'Joana Maria Souza', '(75) 98208-5281', 'joanamaria@gmail.com'),
    (3, 'Flávia Ferreira Melo', '(75) 99108-8645', 'flaviamelo@gmail.com'),
`;

function createTable() {
  db.run(TATUADOR_SCHEMA, (error) => {
    if (error) console.log("Error to create tatuador table.");
  });
}

function populateTable() {
  db.run(ADD_TATUADOR_DATA, (error) => {
    if (error) console.log("Error to populate tatuador table");
  });
}

db.serialize(() => {
  createTable();
  populateTable();
});
