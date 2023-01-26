var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'pokedex',
    user: 'root',
    password: ''
});

connection.connect(function(error){
    if (error) {
        throw error
    } else {
        console.log('Successfully connection')
    }
});

connection.query('select name, japanese, type1 from pokemong1', function(error, results){
    if (error) {
        throw error
    } else {
        results.forEach(result => {
            console.log(result)
        });
    }
});

connection.end();