import { rm } from 'node:fs';

const remove = async () => {
    rm('src/fs/files/fileToRemove.txt', (error) => {
        if (error) {
            console.log('FS operation failed');
        } else {
            console.log('File is removed');
        }
    })
};

await remove();
