const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use("/ruta1", (req, res) => {
    res.json({message: "esto es una respuesta"})
})

app.listen(3000, (err) => {
    if (err) console.log("an error ocurred")
    console.log("server running on port 3000");
})