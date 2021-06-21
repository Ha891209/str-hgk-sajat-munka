const EventEmitter = require('events');

class Logger extends EventEmitter {
    error(message) {
        console.log('\x1b[31m', message)
    };

    success(message) {
        console.log('\x1b[32m', message)
    }
}

module.exports = Logger;