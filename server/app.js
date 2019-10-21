require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const ContactEntry = require('./Model/ContactEntry')

const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
    const body = req.body

    const entry = new ContactEntry({
        name: body.name,
        email: body.email,
        telephone: body.telephone || '',
        message: body.message
    })

    entry
        .save()
        .then(savedEntry => {
            res.json(savedEntry.toJSON())
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('*', (req, res) => {
	res.redirect('/')
})

const PORT = process.env.PORT || 3001
app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})