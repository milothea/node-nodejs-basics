import { readFile } from 'node:fs/promises';

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt';

    try {
        const content = await readFile(filePath, { encoding: 'utf-8' });

        console.log(content);
    } catch {
        console.log('FS operation failed');
    }
};

await read();