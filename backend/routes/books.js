const {Router} = require('express')
const router = Router();

const Book = require('../models/books');

router.get('/', async (req, res)=> {
    const books = await Book.find();
    res.json(books);
})

router.post('/', async (req, res) => {
const {title, author, isbn} = req.body;
const newBook = new Book({title, author, isbn})
console.log(newBook);
await newBook.save();
res.json({"message":"Book save!"});

})

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({"message": "Book deleted"})

})



module.exports = router;