const express = require('express');
const app = new express()
const PORT = 4000
const mongoose = require('mongoose')
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend


mongoose.connect('mongodb+srv://sahlarajiba:sahla1@cluster0.3jwiy4u.mongodb.net/')
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log("Error connecting to MongoDB " + err)});





// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});