const express = require('express');
//const app = express();

const router = express.Router();

router.use('/',(req,res,next) => {
    //res.send('success!');
    console.log('哈哈1')
    //next('router'); //next里传进去了router，就直接返回了，不会调用下一个中间件
    next();
});


router.use('/',(req,res,next) => {
    //res.end('ahha!');

    console.time("XXX");

    console.log('哈哈2')

    console.timeEnd("XXX");

    console.log('nihao')




    next();
});
// router.post('/q',(req,res,next) => {
//     console.log(req.body);
//     res.send('yes');cl
// })


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