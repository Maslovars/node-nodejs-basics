import { readFile } from 'fs/promises';
import path from 'path';

const read = async () => {
    try {
        const filePath = path.join('src', 'fs', 'files', 'fileToRead.txt');
        const content = await readFile(filePath);
        console.log(content.toString());
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
