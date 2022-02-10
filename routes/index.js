var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController.js');
const authorController = require('../controllers/authorController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/book', bookController.viewAll);
router.get('/book/profile/:id', bookController.viewProfile);
router.get('/book/edit/:id', bookController.renderEditForm);
router.get('/book/add', bookController.renderAddForm);
router.get('/book/delete/:id', bookController.deleteBook);



module.exports = router;
