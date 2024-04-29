const express = require("express")
require('dotenv').config()
let app = express()
const cors=require('cors')
const ownerRouter=require('./router/owner')
const userRouter=require('./router/user')




// app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())


app.use(express.json());

app.use('/api/auth',userRouter)
app.use('/api/owner',ownerRouter)

let port = 3000


app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
