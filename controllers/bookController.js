const {Book} = require('../models')
const genres = ['Harem', 'Action Fiction', 'Romance', 'Thriller', 'Comedy'].sort();

//view all
module.exports.viewAll = async function(req,res){
    const books = await Book.findAll();
    res.render('books/view_all', {books});
}

//profile
module.exports.viewProfile= async function(req,res){
    const book = await Book.findByPk(req.params.id);
    res.render('books/profile', {book});
}

//render add form
module.exports.renderAddForm = function(req, res) {
    const book = {
        title: '',
        publisher: '',
        genre: genres[0],
        pages: '',
        image: '',
        description: ''
    };
    res.render('book/add', {book, genres});
};


//add

//render edit form
module.exports.renderEditForm = async function(req, res){
    const book = await Book.findByPk(req.params.id);
    res.render('book/edit', {book, genres});
}

//update
module.exports.updateBook = async function(req, res) {
    await Book.update( {
        title: req.body.title,
        publisher: req.body.publisher,
        genre: req.body.genre,
        page_amount: req.body.pages,
        cover_image: req.body.image,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect(`/books/profile/${req.params.id}`);
};

//delete