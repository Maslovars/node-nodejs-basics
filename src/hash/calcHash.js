import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
    const fileContent = async (filePath) => {
        try {
            const content = await readFile(filePath);
            return content;
        } catch (err) {
            return false;
        }
    };
    const filePath = path.join(
        'src',
        'hash',
        'files',
        'fileToCalculateHashFor.txt',
    );
    const fileToHash = await fileContent(filePath);
    const hash = createHash('sha256');
    hash.update(fileToHash);
    console.log(hash.digest('hex'));
};

await calculateHash();
