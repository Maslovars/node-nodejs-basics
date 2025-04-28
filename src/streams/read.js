import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const read = async () => {
    const filePath = path.join('src', 'streams', 'files', 'fileToRead.txt');
    const readStream = createReadStream(filePath);
    await pipeline(readStream, process.stdout);
    setTimeout(() => {}, 3000);
};

await read();
