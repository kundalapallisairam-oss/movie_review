require("dotenv").config();
const express = require("express")
const cors = require("cors")
const axios = require("axios")


const app = express()

app.use(cors())

const API_KEY = process.env.OMDB_API_KEY;

app.get("/movie/:name", async (req,res)=>{

const name = req.params.name

try{

const response = await axios.get(
`https://www.omdbapi.com/?t=${name}&apikey=${API_KEY}`
)

res.json(response.data)

}catch(error){

console.log(error)
res.status(500).json({error:"API error"})

}

})
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})