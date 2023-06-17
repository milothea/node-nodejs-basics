import * as fs from 'node:fs';

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt';

    if(fs.existsSync(filePath)) {
        fs.rmSync(filePath);

        return 'File has been removed';
    }

    throw new Error('FS operation failed');
};

await remove();