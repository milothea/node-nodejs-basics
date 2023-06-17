import * as fs from 'node:fs';

const list = async () => {
    const filesPath = 'src/fs/files';

    if (fs.existsSync(filesPath)) {
        console.log(fs.readdirSync(filesPath));

        return 'Files are listed';
    }

    throw new Error('FS operation failed');
};

await list();