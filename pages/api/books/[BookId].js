import dbConnect from "../../../lib/dbConnect";
import Book from "../../../models/Book"
export default async function handler(req, res) {
    const { BookId } = req.query
    await dbConnect()
    Book.findOne({ id: BookId }, (err, doc) => {
        if (doc == null) {
            res.status(404).json({ message: "not found !" })
        } else {
            res.status(200).json({ data: doc, message: "found" })
        }
    })
}