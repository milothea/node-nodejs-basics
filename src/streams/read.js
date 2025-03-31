import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const stream = createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf-8' });

    stream.on('data', (chunk) => {
        stdout.write(chunk);
    });
    stream.on('error', (err) => {
        stdout.write(`Something went wrong with the following error: ${err.message || err}`);
    })
};

await read();