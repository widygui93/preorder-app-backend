const express = require('express');
const cors = require('cors');
const db = require('./models/index');
const cookieParser = require('cookie-parser');
// const { Sequelize } = db.sequelize;
require('dotenv').config();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://preorderapp.test'],
    credentials: true
}));

// database connection
// const sequelize = new Sequelize('mysql://root:widy123@localhost:3306/pre_order_db');
const sequelize = new db.Sequelize('mysql://root:widy123@localhost:3306/pre_order_db');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit();
  })


// routes
require('./routes/auth.routes')(app);
require('./routes/petrol.routes')(app);
require('./routes/user.routes')(app);

app.listen('3300', () => {
    console.log('server is standy by at 3300');
})