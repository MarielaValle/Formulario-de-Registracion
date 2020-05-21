var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.raiz)

router.get('/register',userController.get_registerMostrar);


router.post('/register',userController.post_registerCrear);

router.get('/profile/:id',userController.profileId);



module.exports = router;