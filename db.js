const {Client} = require('pg');
const client = new Client();

class DB{
    constructor(){
        this.connection = client.connect();
    }
}

module.exports = DB;