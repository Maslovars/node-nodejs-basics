import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import path from 'path';

const decompress = async () => {
    const filePath = path.join('src', 'zip', 'files', 'fileToCompress.txt');
    const archivePath = path.join('src', 'zip', 'files', 'archive.gz');
    const ReadStream = createReadStream(archivePath);
    const WriteStream = createWriteStream(filePath);
    const unzip = createUnzip();

    pipeline(ReadStream, unzip, WriteStream, (err) => {
        if (err) console.error('error:', err);
    });
};

await decompress();
