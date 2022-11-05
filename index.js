const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');

//parse requested data type
app.use(bodyParser.urlencoded({extended: false}));

//parse requested data type - json
app.use(bodyParser.json());

app.get('/', (req, res) =>{res.send('Hello from Homepage.');
});

const answerRoutes = require('./src/routes/answer.route');

app.use('/api/demo/answer', answerRoutes);



app.listen(port, () =>{
    console.log(`Api listening ${port} port`);
});