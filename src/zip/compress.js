import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

const compress = async () => {
    const filePath = path.join('src', 'zip', 'files', 'fileToCompress.txt');
    const archivePath = path.join('src', 'zip', 'files', 'archive.gz');
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(archivePath);
    const gzip = createGzip();

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) console.error('error', err);
    });
};

await compress();
