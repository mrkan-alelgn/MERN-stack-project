const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose');


const app = express()
const PORT = 5000

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/betting', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/user');
const usersBetsRouter = require('./routes/usersBets');
const matchRouter = require('./routes/match');

app.use('/user', userRouter);
app.use('/usersBets', usersBetsRouter);
app.use('/match', matchRouter);


app.get("/api/customers", (req, res) => {
    const customers = [
        {
            id: 1,
            firstName: "Jose",
            lastName: "Doe"
        },
        {
            id: 2,
            firstName: "Pleng",
            lastName: "Pup"
        },
        {
            id: 3,
            firstName: "Chub",
            lastName: "Zen"
        },
        {
            id: 4,
            firstName: "Carl",
            lastName: "Zhen"
        },
        {
            id: 5,
            firstName: "Josaphat",
            lastName: "Martinez"
        },
    ]

    res.json(customers)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

