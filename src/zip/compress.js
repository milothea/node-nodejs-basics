import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
    const readStream = createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = createWriteStream('src/zip/files/archive.gz');
    const gzipStream = createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();