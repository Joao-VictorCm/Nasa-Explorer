import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "..."


app.use(express.static("public", {
    setHeaders: (res, path) =>{
        if(path.endsWith(".css")){
            res.set("Content-Type", "text.css")
        }
    }
}))

app.get("/", (req, res) => {
    res.render("main.ejs")
})



app.listen(port, () =>{
    console.log(`server rodando na porta ${port}`)
})