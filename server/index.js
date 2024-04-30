const express = require("express")
require('dotenv').config()
let app = express()
const cors=require('cors')


const userRoute=require('./router/user')

const search=require('./router/search')




// app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())


app.use(express.json());


app.use('/api/search',search)



app.use("/api/user",userRoute)

let port = 3000

app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
