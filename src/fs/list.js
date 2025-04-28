import { readdir } from 'fs/promises';
import path from 'path';

const list = async () => {
    try {
        const dirPath = path.join('src', 'fs', 'files');
        const files = await readdir(dirPath);
        for (const file of files) console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
