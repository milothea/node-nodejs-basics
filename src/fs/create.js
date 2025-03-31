import { open, writeFile } from 'node:fs';

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';

    open(filePath, 'wx', (err) => {
       if (err && err.code === 'EEXIST') {
           console.log('FS operation failed');
           return;
       }

       writeFile(filePath, 'I am fresh and young', (error) => {
           if (err) {
               console.log(`Writing file is failed with the following error: ${error.message || error}`);
           } else {
               console.log('File is created');
           }
       });
    });
};

await create();
