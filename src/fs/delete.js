import { unlink } from 'fs/promises';
import path from 'path';

const remove = async () => {
    try {
        const filePath = path.join('src', 'fs', 'files', 'fileToRemove.txt');
        await unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
