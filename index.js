import express from "express"
import axios from "axios"

const ano = new Date().getFullYear()
console.log(ano)
const mes = new Date().getMonth()
console.log(mes)
const dia = new Date().getDate()
console.log(dia)




const app = express()
const port = 3000
const apod = "https://api.nasa.gov/planetary/apod"
const marsPhoto = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&"
const apiKey = "0PyXWKPSRwnftr7fdJeEqc2RatHhzxGFaXuMXRoN"





app.use(express.static("public", {
    setHeaders: (res, path) =>{
        if(path.endsWith(".css")){
            res.set("Content-Type", "text.css")
        }
    }
}))

app.get("/", (req, res) =>{
    res.render("section.ejs")
})




app.get("/APOD", async (req, res) => {
    const response = await axios.get(apod,{
        params:{
            api_key: apiKey
        }
    })
    const result = response.data
    res.render("apod.ejs", {data: result})
})



app.get("/Mars", async (req, res) => {
    const response = await axios.get(marsPhoto,{
        params:{
            api_key: apiKey
        }
    })
    const result = response.data.photos
    res.render("mars.ejs", {data: result})
})



app.listen(port, () =>{
    console.log(`server rodando na porta http://localhost:${port}/`)
})