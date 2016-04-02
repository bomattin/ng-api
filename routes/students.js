var express = require('express');
var url = require('url');
var models = require('../models');
var _ = require('lodash');

var router = express.Router();

// GET /students
router.get('/', function(req, res, next) {
    models.Student.findAll()
        .then(function(students){
            res.json(students)
        })
        .catch(function(err){
            res.status(400);
            res.json({error: err})
        });
});


// GET /students/:id
router.get('/:id', function(req, res, next){
    models.Student.findById(req.params.id)
        .then(function(student){
            if (!student) {
                return next({status: 404, message: "No student with that ID found"})
            } else {
                return res.json(student)
            }
        })
        .catch(function(err){
            return next(err)
        })
});

// POST /students/
router.post('/', function(req, res, next){
    models.Student.create({
        first_name: req.body.first_name ? req.body.first_name : null,
        last_name: req.body.last_name ? req.body.last_name : null
    }).then(function (student){
        res.json(student)
    }).catch(function (err){
        console.log(err);
        res.status(400);
        res.json({error: err})
    });
});

// PUT /students/:id
// Upsert
router.put('/:id', function(req, res, next){
    var ops = {
        id: req.params.id,
        first_name: req.body.first_name ? req.body.first_name : null,
        last_name: req.body.last_name ? req.body.last_name : null
    };

    ops = _.omitBy(ops, _.isNull);
    models.Student.upsert(ops).then(function (student){
        res.json(student)
    }).catch(function (err){
        console.log(err);
        res.status(400);
        res.json({error: err})
    });
});

// DELETE /students/:id
router.delete('/:id', function(req, res, next){
    models.Student.destroy({
        where: {id: req.params.id}
    }).then(function (student){
        res.json(student)
    }).catch(function (err){
        console.log(err);
        res.status(400);
        res.json({error: err})
    });
});




module.exports = router;
