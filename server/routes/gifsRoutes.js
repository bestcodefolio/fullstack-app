import express from 'express';
import gifsService from '../services/gifsService';

const router = express.Router();

router
    .route('/gifs')
    .get((req, res) => {
        gifsService.getAll(req.query.q, req.query.limit)
            .then(result => res.send(result));
    })
    .post((req, res) => {
        gifsService.add(req.body.title, req.body.description, req.body.source, req.body.tags)
            .then(id => res.send(id));
    });

router
    .route('/gifs/:gifId')
    .get((req, res) => {
        gifsService.getOne(req.params.gifId)
            .then(result => res.send(result))
    })
    .put((req, res) => {
        gifsService.update(req.params.gifId, req.body.title, req.body.description)
            .then(res.status(200).end())
    })
    .delete((req, res) => {
        gifsService.delete(req.params.gifId, res)
            .then(res.status(200).end())
    });

export default router;