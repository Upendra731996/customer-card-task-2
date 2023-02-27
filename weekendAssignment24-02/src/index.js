const express = require("express")
const bodyParser = require('body-parser');
const route = require('./routes/rout');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://abhi03:UQkqPECmlouMcNjb@cluster1.kwsn7az.mongodb.net/mini-blogs", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen( 3000, function () {
    console.log('Express app running on port ' + ( 3000))
});