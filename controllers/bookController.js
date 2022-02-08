const {Book} = require('../models')

//view all
module.exports.viewAll = async function(req,res){
    const books = Book.findAll();
    res.render('books/view_all', {books});
}

//book profile

//render add form

//add

//render edit form

//update

//delete