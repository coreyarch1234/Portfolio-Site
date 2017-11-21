const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;


//body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// Setting templating engine
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
app.use(express.static('theme'));


app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(process.env.PORT || port, function() {
    console.log('server started: ' + port);
    console.log('env port' + process.env.PORT);
});
