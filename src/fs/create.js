import { writeFile } from 'fs/promises';
import path from 'path';

const create = async () => {
    try {
        const content = 'I am fresh and young';
        const filePath = path.join('src', 'fs', 'files', 'fresh.txt');
        await writeFile(filePath, content, { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();
