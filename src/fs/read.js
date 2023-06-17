import * as fs from 'node:fs';

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt';

    if (fs.existsSync(filePath)) {
        console.log(fs.readFileSync(filePath, 'utf-8'));

        return 'File is read';
    }

    throw new Error('FS operation failed');
};

await read();