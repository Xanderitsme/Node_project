const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use("/customer", (req, res) => {
    res.json({
        id: 1,
        name: "Pepe",
        description: "software engineer",
        age: 32
    })
})

module.exports = route

app.listen(3000, (err) => {
    if (err) console.log("an error ocurred")
    console.log("server running on port 3000");
})