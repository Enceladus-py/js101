const express = require("express")
const app = express()
const port = 3000

var app_path = __dirname

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.static(app_path) // probably the wrong way
)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/tutorial", (req, res) => {
    res.sendFile(__dirname + "/tutorial/index.html")
})

app.post("/tutorial", async (req,res) => {
  console.log("test has been passed!")
  console.log(req.body)
  res.redirect("/tutorial")
})

app.get("/hmw1", (req, res) => {
    res.sendFile(__dirname + "/hmw1/index.html")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

