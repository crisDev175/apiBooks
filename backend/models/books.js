const { Schema, model } = require('mongoose')


const BookSquema = new Schema(
    {
        title: { type: String, require: true},
        author: { type: String, require: true},
        isbn: { type: String, require: true},
        imagePaht: { type: String, require: true},
        created_At: { type: Date, default: Date.now }
    }
);

module.exports = model('Book', BookSquema)
