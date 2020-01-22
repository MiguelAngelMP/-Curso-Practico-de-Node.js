const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();


//Router
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);


//internal functions

function list(req, res) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        }).catch((err) => {
            response.error(req, res, err.menssage, 400);
        });;
}

function get(req, res) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        }).catch((err) => {
            response.error(req, res, err.menssage, 400);
        });
}

function upsert(req, res) {

    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        }).catch((err) => {
            response.error(req, res, err, 500);
        });
}

module.exports = router;