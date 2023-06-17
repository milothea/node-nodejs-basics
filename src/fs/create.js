import * as fs from 'node:fs';
const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';
    const content = 'I am fresh and young';
    const fileExists = fs.existsSync(filePath);

    if (!fileExists) {
        fs.appendFileSync(filePath, content, (err) => console.error(err));

        return 'file is created';
    }

    throw new Error('FS operation failed');
};

await create();