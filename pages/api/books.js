import dbConnect from "../../lib/dbConnect";
import Book from "../../models/Book"

export default async function handler(req, res) {
    const { method } = req
    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const books = await Book.find({})
                res.status(200).json({ success: true, data: books })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                Book.findOne({ id: req.body.id }, async (err, doc) => {
                    if (doc == null) {
                        const book = await Book.create(req.body)
                        res.status(200).json({ success: true, data: book })
                    } else {
                        res.status(201).json({ data: doc, message: "data already exist", success: false })
                    }
                })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}