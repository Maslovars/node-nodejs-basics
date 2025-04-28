import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
    const filePath = path.join('src', 'cp', 'files', 'script.js');
    const child = fork(filePath, args, { silent: true });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['1', '2', '3', '4', '5']);
