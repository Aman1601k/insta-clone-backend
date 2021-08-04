const express = require('express');
const app = express();
var PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')
const cors = require('cors')

app.use(cors());

mongoose.connect(MONGOURI,{
     useNewUrlParser:true,useUnifiedTopology:true
})
mongoose.connection.on('connected' , () => {
     console.log('Connected to database')
})
mongoose.connection.on('error' , (err) => {
     console.log('Error while connecting to database', err)
})

require('./models/user');
require('./models/post');
require('./models/conversation');
require('./models/message');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));
app.use(require('./routes/conversations'));
app.use(require('./routes/message'));

app.listen(PORT,() => {
     console.log('Server is running on Port' , PORT);
})

//

