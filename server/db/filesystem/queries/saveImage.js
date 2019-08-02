import fs from 'fs';
import path from 'path';

const saveImageAtServer = (image, id) => {
    return fs.writeFile(path.join(__dirname, '../../../../') + `/files/${id}.gif`, image.data, (error) => {
        if (error) throw error;
        console.log('file saved!');
    });
}

export default saveImageAtServer;