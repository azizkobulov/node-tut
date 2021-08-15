/* console.log(__filename)
console.log(__dirname)

let url = 'http://mylogger.io/log'

function log(message) {
    console.log(message)
}

module.exports = log */

let EventEmitter = require('events')


let url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
    // Raise an event
        this.emit('messageLoaded')
    }
}


module.exports = Logger