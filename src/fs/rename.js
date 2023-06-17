import * as fs from 'node:fs';

const rename = async () => {
    const filePath = 'src/fs/files/wrongFilename.txt';
    const newFilePath = 'src/fs/files/wrongFilename.txt';

    if (fs.existsSync(filePath) && !fs.existsSync(newFilePath)) {
        fs.rename(filePath, newFilePath);

        return 'File has been renamed';
    }

    throw new Error('FS operation failed');
};

await rename();