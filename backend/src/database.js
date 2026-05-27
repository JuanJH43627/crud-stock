const Database = require('better-sqlite3');

const db = new Database('stock.db');

db.prepare(`
CREATE TABLE IF NOT EXISTS productos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  precio REAL,
  categoria TEXT,
  stock INTEGER
)
`).run();

module.exports = db;