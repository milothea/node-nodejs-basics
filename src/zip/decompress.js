import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const readStream = createReadStream('src/zip/files/archive.gz');
    const writeStream = createWriteStream('src/zip/files/fileToCompress.txt');
    const unzipStream = createGunzip();

    readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();