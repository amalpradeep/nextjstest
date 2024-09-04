// db/database.js
const Database = require('better-sqlite3');
const path = require('path');

// Initialize the SQLite database
const db = new Database(path.resolve(__dirname, 'data.db'), { verbose: console.log });

// Create a table to store company data if it doesn't already exist
db.exec(`
  CREATE TABLE IF NOT EXISTS company (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`);

module.exports = db;
