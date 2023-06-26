import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const path = './src/cp/files/script.js';
    const child = fork(path, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['1', '2', '3', '4', '5',]);
