const express= require('express');
const port= 5500;
const expressLayout= require('express-ejs-layouts');
// for database
const db= require('./config/mongoose');
const app = express();
//middleware
app.use(express.urlencoded());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(expressLayout);

// extract the style and script
app.set('layout extractStyles',true);
app.set('layout extractScripts',true)
// use express router
app.use('/', require('./routes'));
//set up asset files
app.use(express.static('./assets'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port:${port}`);
})