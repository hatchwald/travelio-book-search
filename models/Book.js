import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    id: String,
    title: String,
    thumbnail: String,
    author: String,
    rating: String,

})

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema)