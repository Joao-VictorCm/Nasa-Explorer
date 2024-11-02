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

app.get("/", (req, res) =>{
    res.render("index.ejs")
})




app.get("/APOD", async (req, res) => {
    const response = await axios.get(API_URL,{
        params:{
            api_key: apiKey
        }
    })
    const result = response.data
    console.log(result)
    res.render("main.ejs", {data: result})
})



app.listen(port, () =>{
    console.log(`server rodando na porta ${port}`)
})