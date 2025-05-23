import { dirname, sep } from 'node:path';
import { readFile } from 'node:fs';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import './files/c.cjs';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let unknownObject;

async function loadJSON(num) {
    const filePath = num > 0.5 ? './files/a.json' : './files/b.json';

    try {
        unknownObject = await readFile(filePath);
    } catch (err) {
        console.log(`Something went wrong with the following error: ${err.message || err}`);
    }
}

loadJSON(random);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};
