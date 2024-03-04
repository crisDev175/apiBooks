const mongoose = require('mongoose');

const url = process.env.MONGOURI;

mongoose.connect(url)
.then(db => console.log("****DB connected****"))
.catch(err => console.error(err));