import * as React from 'react';
import * as SQLite from 'expo-sqlite';

// ouerture de la base de donnees
const db = SQLite.openDatabase('../NivantisDatabase.db', 3)


class bdd extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT Nom FROM Pharmacie",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
        });
    });

    /*db.exec([{ sql: 'SELECT * FROM Pharmacie', args: [] }], false, () =>
      console.log(JSON.stringify('reussit'))
    );*/
  };
}

/*db.exec([{ sql: 'SELECT * FROM Pharmacie', args: [] }], false, () =>
  console.log(JSON.stringify(db))
);*/

/*db.transaction(
tx => {
//tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
tx.executeSql("SELECT * FROM Pharmacie", [], (_, { rows }) =>
console.log('JSON.stringify(rows)')
);
},
null,
);*/
export default bdd
