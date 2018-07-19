const express = require('express');
const router = express.Router();

const Class = require('../model/class');

router.get('/', (req, res, next) => {
    // res.send({response: "I am alives"}).status(200);

    Class.getClasses((err, classes)=>{
        if (err) throw err;
        res.send({response: "I am alives"}).status(200);
    },3);
});

router.get('/:id/details', (req, res, next)=>{
    // Class.getById([req.params.id], (err, classes)=>{
    //     res.send({response: "this is details"});
    // });
});

module.exports = router;