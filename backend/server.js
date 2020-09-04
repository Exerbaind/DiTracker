const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv/config');
const passport = require('passport');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`You are connected to ${process.env.DB_CONNECTION}`)
}).catch(err => {
    console.log(err)
})

const auth = require('./routes/api/auth');
app.use('/api/auth', auth);

app.use(passport.initialize());
require('./config/passport')(passport);


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
});