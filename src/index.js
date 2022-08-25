const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
// const moment = require('moment')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        
        
        let date_ob= new Date();

// current date
// adjust 0 before single digit date
let date =  date_ob.getDate();

// current month
let month = (date_ob.getMonth() + 1);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();


         let a= year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds
        console.log(a,req.ip,Date.now(),req.url);
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
