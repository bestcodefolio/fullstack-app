import express from 'express';
import fs from 'fs';
import path from 'path';

const staticFilesRoute = express.Router();

staticFilesRoute
    .route('/files/:gifId')
    .get((req, res) => {
    fs.readFile(path.join(__dirname, '../../../../', '/files/' + req.params.gifId), (err, data) => {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);
    });
})

export default staticFilesRoute;