import fs from 'fs';
import path from 'path';

const deleteFileFromServer = id => {
    fs.unlink(path.join(__dirname, '../../../../', `/files/${id}.gif`), (error) => {
        if (error) throw error;
        console.log('file deleted!');
    });
}

export default deleteFileFromServer;