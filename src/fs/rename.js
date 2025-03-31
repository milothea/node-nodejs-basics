import { existsSync, rename as fsRename } from 'node:fs';

const rename = async () => {
    const corePath = 'src/fs/files/';
    const sourceFilePath = `${corePath}wrongFilename.txt`;
    const renamedFilePath = `${corePath}properFilename.md`;
    const sourceFileExists = existsSync(sourceFilePath);
    const renamedFileExists = existsSync(renamedFilePath);

    if (sourceFileExists && !renamedFileExists) {
        fsRename(sourceFilePath, renamedFilePath, (err) => {
            if (err) {
                console.log(`Renaming failed with the following error: ${err.message || err}`);
            } else {
                console.log('File is renamed')
            }
        })
    } else {
        console.log('FS operation failed');
    }
};

await rename();