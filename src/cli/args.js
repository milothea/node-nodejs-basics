import { argv } from 'node:process';

const parseArgs = () => {
    const namePrefix = new RegExp('^--');
    const result = [];

    for (let i = 0; i < argv.length; i++) {
        const curKey = argv[i];
        const isKey = namePrefix.test(curKey);

        if (isKey) {
            result.push(`${curKey} is ${argv[i + 1]}`);
            i += 1;
        }
    }

    console.log(result.join(', '))
};

parseArgs();