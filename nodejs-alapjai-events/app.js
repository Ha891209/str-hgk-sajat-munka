
const Logger = require('./Logger');
const logger = new Logger();
const { createReadStream, createWriteStream } = require('fs');
const readableStream = createReadStream('./text.txt', { encoding: 'utf8', highWaterMark: 512 });

const capitalisation = string => string.charAt(0).toUpperCase() + string.slice(1);

readableStream.on('data', (chunk) => {
    try {
        const upperCaseString = chunk.split(' ').map(item => capitalisation(item)).join(' ');
        logger.success('File transform successful.')
        console.log(upperCaseString);
    } catch (err) {
        logger.error(err.message)
    }
})

const writeableStream = createWriteStream('./textcopy.txt')
readableStream.pipe(writeableStream)

logger.emit('data');
