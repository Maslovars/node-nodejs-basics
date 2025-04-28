import { cp } from 'fs/promises';
import path from 'path';

const copy = async () => {
    try {
        const sourcePath = path.join('src', 'fs', 'files');
        const destinationPath = path.join('src', 'fs', 'files_copy');
        await cp(sourcePath, destinationPath, {
            force: false,
            errorOnExist: true,
            recursive: true,
        });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

copy();
