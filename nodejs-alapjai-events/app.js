const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');
const path = require('path');

const Logger = require('./Logger');
const logger = new Logger();


class TitleCaseStream extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, enc, done) {
        const output = chunk.toString('utf8').split(' ')
            .map(word => {
                return `${word[0].toUpperCase()}${word.slice(1)}`;
            })
            .join(' ');
        this.push(output);
        done();
    };
}

const readStream = createReadStream(
    path.join(__dirname, 'text.txt'),
    {
        encoding: 'utf8',
        highWaterMark: 1024
    }
);

const writeStream = createWriteStream(
    path.join(__dirname, 'textcopy.txt'),
    'utf8'
);

writeStream.on('finish', (err) => {
    if (err) {
        logger.error('Transform failed')
    };
    logger.success('File transform successful');
});

readStream.pipe(new TitleCaseStream()).pipe(writeStream);