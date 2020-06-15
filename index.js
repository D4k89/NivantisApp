import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
const sqlite3 = require("sqlite3").verbose();
// ouerture de la base de donnees avec veriffication d erreur
let db = new sqlite3.Database('.\NivantisDatabase.db');
let db = new sqlite3.Database('.\NivantisDatabase.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the NivantisDatabase SQlite database.');
});
//recherhe dans la base de donnees
let sql = 'SELECT * FROM Adresse';
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

// fermeture de la base de donnees avec veriffication d erreur
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
