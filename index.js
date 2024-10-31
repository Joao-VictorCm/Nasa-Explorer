import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const API_URL = "https://api.nasa.gov/planetary/apod"
const apiKey = "0PyXWKPSRwnftr7fdJeEqc2RatHhzxGFaXuMXRoN"




app.use(express.static("public", {
    setHeaders: (res, path) =>{
        if(path.endsWith(".css")){
            res.set("Content-Type", "text.css")
        }
    }
}))

app.get("/", async (req, res) => {
    const result = await axios.get(API_URL,{
        params:{
            api_key: apiKey
        }
    })
    console.log(result)
    res.render("main.ejs")
})



app.listen(port, () =>{
    console.log(`server rodando na porta ${port}`)
})