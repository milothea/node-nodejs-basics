import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
    const scriptPath = new URL('./files/script.js', import.meta.url);

    for (let i = 0; i < args?.length; i++) {
        const childProcess = spawn('node', [scriptPath.pathname, args[i]]);

        stdin.pipe(childProcess.stdin);
        childProcess.stdout.pipe(stdout);
        childProcess.on('error', (err) => {
            stdout.write(`Something went wrong with the following error: ${err.message || err}`);
        });
    }
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
