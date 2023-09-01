const express = require ("express")
const app = express();
const path = require ("path")

app.use(express.static("public"));

app.listen(4444, () => console.log("servidor en el 4444"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
})