const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    tasks: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)