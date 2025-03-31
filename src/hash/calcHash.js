import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const stream = createReadStream('src/hash/calcHash.js');

    await pipeline(stream, hash);

    console.log(hash.digest('hex'));
};

await calculateHash();
