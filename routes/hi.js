const express = require('express');
//const app = express();

const router = express.Router();

router.get('/',(req,res,next) => {
    res.send('success!');
    next();
});

router.post('/q',(req,res,next) => {
    console.log(req.body);
    res.send('yes');
})

module.exports = router;


//
// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });
//
// module.exports = router;