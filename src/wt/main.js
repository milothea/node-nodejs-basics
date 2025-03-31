import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const cpusNumber = cpus().length;
    const startInput = 10;
    const workers = [];

    for (let i = 0; i < cpusNumber; i++) {
        workers.push(new Promise((resolve) => {
            const worker = new Worker(new URL('./worker.js', import.meta.url));
            const input = startInput + i;

            worker.postMessage(input);
            worker.on('message', (res) => {
                resolve({
                    status: 'resolved',
                    data: res,
                });
            });
            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null,
                });
            });
            worker.on('exit', (code) => console.log(code))
        }))
    }

    const result = await Promise.all(workers);

    console.log(result);
};

await performCalculations();