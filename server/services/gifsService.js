import tagsDAO from '../db/dataAccessObjects/tagsDAO';
import gifsDAO from '../db/dataAccessObjects/gifsDAO';

import saveImageAtServer from "../db/filesystem/queries/saveImage";
import deleteFileFromServer from "../db/filesystem/queries/deleteImage";
import imageDecoderMiddleware from '../middlewares/imageDecoderMiddleware';
import filterData from '../middlewares/filterDataMiddleware';
import caseChanger from "../middlewares/caseChangerMiddleware";

import crypto from 'crypto';

const gifsService = {
    getOne(id) {
        return gifsDAO.getOne(id)
                        .then(result => filterData(caseChanger(result), ['src', 'title', 'publicationdate', 'user']));
    },
    getAll(query, limit) {
        if (query != null && limit != null) {
            return gifsDAO.getAll(query, limit)
                            .then(result => filterData(caseChanger(result), ['id', 'src', 'title', 'publicationdate']));
        } else {
            return new Promise(res => res([]));
        }
    },
    add(title, description, image, tags) {
        const publicationDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const id = crypto.randomBytes(16).toString('hex');
        const tagList = tags.replace(/ /g, '').split('#');
        return Promise.all([
                            gifsDAO.add(id, title, description, publicationDate),
                            saveImageAtServer(imageDecoderMiddleware(image), id),
                            tagsDAO.saveTags(tagList),
                            tagsDAO.saveGifsTags(id, tagList)
                        ])
                        .then(() => id);
    },
    update(id, title, description){
        return gifsDAO.update(id, title, description);
    },
    delete(id) {
        return Promise.all([
            gifsDAO.delete(id),
            deleteFileFromServer(id)
        ]);
    }
}

export default gifsService;