import dbConnect from "../../../lib/dbConnect";
import Book from "../../../models/Book"
export default async function handler(req, res) {

    const { BookId } = req.query
    const { method } = req
    await dbConnect()
    switch (method) {
        case 'GET':
            Book.findOne({ id: BookId }, (err, doc) => {
                if (doc == null) {
                    res.status(404).json({ message: "not found !" })
                } else {
                    res.status(200).json({ data: doc, message: "found" })
                }
            })

            break;
        case 'DELETE':
            Book.findOne({ id: BookId }, (err, doc) => {
                if (doc == null) {
                    res.status(404).json({ message: "Data not found !", success: false })
                } else {
                    Book.deleteOne({ id: BookId }, err => {
                        if (err) {
                            res.status(500).send(err)
                        } else {
                            res.status(200).json({ message: "data has been deleted!", success: true })
                        }

                    })
                }
            })
            break;
        default:
            break;
    }
}