const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');


dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", (error) => console.log(error))
db.once("open", () => console.log("Connect to the database"))

const PORT =  3000


app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})