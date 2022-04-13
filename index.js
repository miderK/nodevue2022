const express = require('express');
const app = express(),
    testJson = require('./test/test.json');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
   // res.send("Hello NodeJS!!");
    // res.send(testJson);
    res.render('index', {name: '홍길동'});
});

app.get('/test/:email', (req, res) => {
    testJson.email = req.params.email; // cf. req.body, req.query
    testJson.aa = req.query.aa;
    res.json(testJson);
});

const server = app.listen(7000, function(){
     console.log("Express's started on port 7000");
});