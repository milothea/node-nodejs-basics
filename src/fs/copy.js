import * as fs from 'node:fs';

const copy = async () => {
    const filesPath = 'src/fs/files';
    const filesCopyPath = 'src/fs/files_copy';
    const filesExists = fs.existsSync(filesPath);
    const filesCopyExists = fs.existsSync(filesCopyPath);
    const error = new Error('FS operation failed');

    if (filesExists && !filesCopyExists) {
        const files = fs.readdirSync(filesPath);

        fs.mkdirSync(filesCopyPath);
        files.forEach((file) => fs.copyFile(
            `${filesPath}/${file}`,
            `${filesCopyPath}/${file}`,
            (err) => console.error(err)
        ));

        return 'files are copied';
    }

    throw error;
};

await copy();
