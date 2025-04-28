import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workerPath = path.join(__dirname, 'worker.js');
    const workers = new Array(cpus().length)
        .fill()
        .map((_, index) => new Worker(workerPath, { workerData: index + 10 }));

    const res = await Promise.allSettled(
        workers.map(
            (worker) =>
                new Promise((resolve, reject) => {
                    worker.on('message', (data) => resolve(data));
                    worker.on('error', (err) => reject(err));
                }),
        ),
    );

    console.log(
        res.map((e) => {
            return e.status === 'fulfilled'
                ? { status: 'resolved', data: e.value }
                : { status: 'error', data: null };
        }),
    );
};

await performCalculations();
