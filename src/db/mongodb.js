const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log("db connectted")
}).catch(err => console.log(err))