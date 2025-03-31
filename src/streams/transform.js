import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reverseInputStream = new Transform({
        transform(chunk, encoding, callback) {
            const inputArr = chunk.toString().split('');

            this.push(inputArr.reverse().join('') + '\n');
            callback();
        }
    });

    stdin.pipe(reverseInputStream).pipe(stdout);
};

await transform();