/* let log = require('./logger')

log('message') */


//PATH
/* 
let path = require('path')

let pathObj = path.parse(__filename)

console.log(pathObj) */



// OS Module

/* let os = require('os')

console.log(os.totalmem()) */


//File System

/* let fs = require('fs')
 */

/* let files = fs.readdirSync('./')
console.log(files)
 */

/* fs.readdir('./', function(err, files) {
    if(err) console.log(err)
    else console.log(files)
}) */


// Event Module

/* let EventEmitter = require('events') */


// Register a listener
/* emitter.on('messageLoaded', function(){
    console.log('Hello')
}) */

// Raise an event

/* emitter.emit('messageLoaded')
 */


/* let EventEmitter = require('events')
let Logger = require('./logger')

let logger = new Logger()
// Register a listener
logger.on('messageLoaded', function(){
    console.log('Hello')
})
logger.log('message')
 */


// HTTP Module

const { Socket } = require('dgram')
let http = require('http')

let server = http.createServer((req, res) => {
    if(req.url === '') {
        res.write('Hello World')
        res.end()
    }
})

/* server.on('connection', (socket) => {
    console.log('New Connection...')
}) */
server.listen(3000)

console.log('Listening on port 3000...')