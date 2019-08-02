import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

import gifsRoutes from './routes/gifsRoutes';
import staticFilesRoute from './db/filesystem/config/staticFilesConfig';
import usersRoutes from './routes/usersRoutes';

import '../server/db/Mongo/queries/gifsQueries'

const port = 5000;
const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), {flags: 'a'}
);

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/', gifsRoutes, usersRoutes, staticFilesRoute);

app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
