import express from "express"
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Hello from the server");
})

app.listen(5000, () => {
    console.log('Server has been started at 5000 port')
}) 