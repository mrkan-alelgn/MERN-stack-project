const express = require("express")

const app = express()

const PORT = 5000
console.log("said")
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
    console.log(customers)
    res.json(customers)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

