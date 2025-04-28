import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const write = async () => {
    const filePath = path.join('src', 'streams', 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    await pipeline(process.stdin, writeStream);
};

await write();
