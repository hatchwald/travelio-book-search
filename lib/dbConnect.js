import mongoose from "mongoose"

const user = process.env.USER
if (!user) {
    throw new Error(
        'Please define user variable on env'
    )
}

const MONGODB_URI = `mongodb+srv://${user}:${process.env.DB_PASSWORD}@${process.env.HOST}`

let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {

        cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn

}

export default dbConnect