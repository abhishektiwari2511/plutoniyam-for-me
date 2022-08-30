const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://abhishek251119:abhishek2511@ac-z8sfqfr-shard-00-00.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-01.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-02.2zhuz3d.mongodb.net:27017/?ssl=true&replicaSet=atlas-4htqnt-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
