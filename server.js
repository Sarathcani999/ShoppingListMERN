const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = require('./config/keys')
const chalk = require('chalk')
const items = require('./routes/api/items')
const cors = require('cors')

// For parsing body of requests
app.use(express.json())
app.use(cors())

// MongoDB Connect
const mongoOptions = {
    useUnifiedTopology: true , 
    useNewUrlParser: true
}
mongoose.connect(db.mongoURI , mongoOptions )
    .then(() => console.log(chalk.bold.yellow("MongoDB Connected")))
    .catch(err => console.error(err));


// Use Routes
app.use('/api/items' , items)

app.get('/' , (req,res) => {
    console.log("IN / route")
    res.json({
        "msg" : "ISuccess"
    })
})

const port = process.env.PORT | 5000
app.listen(port , () => {
    console.log(chalk.bold.yellow(`PORT Established at ${port}`))
})