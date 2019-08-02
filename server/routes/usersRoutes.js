import express from 'express';
import caseChanger from '../middlewares/caseChangerMiddleware';
import usersService from '../services/usersService';

const router = express.Router();

router
    .route('/users')
    .get((req, res) => {
        usersService.getAll()
            .then(result => res.send( caseChanger(result) ))
    })
    .post((req, res) => {
        usersService.add(req.body.username)
            .then(res.status(200).end())
    });

router
    .route('users/:userId')
    .get((req, res) => {
        usersService.getOne(req.params.userId)
            .then(result => res.send( caseChanger(result) ))
    })
    .put((req, res) => {
        usersService.update(req.params.userId, req.body.username)
            .then(res.status(200).end())
    })
    .delete((req, res) => {
        usersService.update(req.params.userId, req.body.username)
            .then(res.status(200).end())
    });

export default router;