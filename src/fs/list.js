import { access, readdir } from 'node:fs/promises';

const list = async () => {
    const folderPath = 'src/fs/files';

    try {
        await access(folderPath);

        const files = await readdir(folderPath);

        console.log(files);
    } catch {
        console.log('FS operation failed');
    }
};

await list();