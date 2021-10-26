const express = require("express")
const mongoose = require("mongoose");
const morgan = require('morgan')
const expressValidator = require('express-validator');
const cors = require('cors')



const app = express()
require('dotenv').config()

app.use(express.json())
app.use(morgan('dev'))
app.use(expressValidator());
app.use(cors())


const houses = require('./routes/Houses')
app.use('/api/houses', houses)


//db connection
mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err));



const Port = process.env.PORT || 3000;
app.listen(Port, () => console.log(`app runing on port ${Port}`))