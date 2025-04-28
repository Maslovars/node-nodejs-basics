import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldFileName = 'wrongFilename.txt';
    const newFileName = 'properFilename.md';
    const newFilePath = path.join('src', 'fs', 'files', newFileName);
    const oldFilePath = path.join('src', 'fs', 'files', oldFileName);
    try {
        const isExists = async (filePath) => {
            try {
                await fs.access(filePath);
                return true;
            } catch (err) {
                return false;
            }
        };
        const res = await isExists(newFilePath);
        if (res) {
            throw new Error('FS operation failed');
        }
        await fs.rename(oldFilePath, newFilePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
