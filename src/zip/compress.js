import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const readStream = createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = createWriteStream('src/zip/files/archive.gz');
    const compressStream = createGzip();

    readStream.pipe(compressStream).pipe(writeStream);
};

await compress();