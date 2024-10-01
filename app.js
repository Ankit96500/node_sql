import http from 'http';
// impotr db
import db from './database.js'

// create server

const server = http.createServer((req,res)=>{
    res.end('Hello I am Running..')
})

server.listen(3000)



