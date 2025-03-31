import { createWriteStream } from 'node:fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
    const stream = createWriteStream('src/streams/files/fileToWrite.txt');

    stdin.pipe(stream);
    stream.on('finish', () => stdout.write('Content is saved to file \'fileToWrite.txt\'.'));
    stream.on('error', (err) => stdout.write(`Something went wrong with the following error: ${err.message || err}`));
};

await write();