import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
    const readStream = createReadStream('src/zip/files/archive.gz');
    const writeStream = createWriteStream('src/zip/files/fileToCompress.txt');
    const gunzipStream = createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();