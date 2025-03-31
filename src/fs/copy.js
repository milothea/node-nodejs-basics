import { cp, existsSync } from 'node:fs';

const copy = async () => {
    const sourceDirPath = 'src/fs/files';
    const targetDirPath = 'src/fs/files_copy';
    const sourceDirExists = existsSync(sourceDirPath);
    const targetDirExists = existsSync(targetDirPath);

    if (sourceDirExists && !targetDirExists) {
        await cp(sourceDirPath, targetDirPath, { recursive: true }, (err) => {
            if (err) {
                console.log(`Coping is failed with the following error: ${err.message || err}`);
            } else {
                console.log('Files are copied');
            }
        });
    } else {
        console.log('FS operation failed');
    }
};

await copy();
