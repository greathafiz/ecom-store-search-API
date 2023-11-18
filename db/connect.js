const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/searchapi'
// const uri = 'mongodb+srv://abdulhafiz:UsLWiNFxhf669ZfW@nodeexpressprojects.f8r0bvb.mongodb.net/searchapi?retryWrites=true&w=majority'
// mongodb://127.0.0.1:27017/taskmanager
const connectDB = () => {
    return mongoose.connect(uri)
}

module.exports = connectDB