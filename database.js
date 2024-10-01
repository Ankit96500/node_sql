import mysql from 'mysql2';

// connect database:
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'******',
    database:'nodejs'
})


export {pool}