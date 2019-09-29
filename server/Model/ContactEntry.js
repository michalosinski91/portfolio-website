require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to ', url)

mongoose.connect(`${url}`, {useNewUrlParser: true})
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log('error connecting to Mongo ', err.message)
    })

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        require: true
    },
    email: {
        type: String,
        minlength: 5,
        required: true
    },
    telephone: {
        type: String
    },
    message: {
        type: String,
        minlength: 5,
        required: true
    }
})

module.exports = mongoose.model('ContactEntry', ContactSchema)