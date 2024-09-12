import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function criarEPopularTabelaUsuarios(nome, email, senha) {
    const db = await open({
      filename: './banco.db',
      driver: sqlite3.Database,
    });
    
db.run(
    'INSERT INTO contas (nome, email, senha) VALUES (?,?,?)', [
        nome,
        email,
        senha,
    ]);
}
criarEPopularTabelaUsuarios('Marcelo', 'marcelo@gmail.com', 'marcelo1');