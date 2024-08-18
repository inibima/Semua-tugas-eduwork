const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const { sequelize } = require('./models');
const indexRouter = require('./routes/index');
const userRouterV1 = require('./routes/usersV1');
const userRouterV2 = require('./routes/usersV2');

const app = express();

// Middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware untuk logging dengan morgan
app.use(morgan('dev'));

// Set public directory untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Set views directory dan view engine (optional)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Routes untuk halaman utama
app.use('/', indexRouter);

// Koneksi MongoDB native
const mongoUrlV1 = 'mongodb://mongodb_v1:27017/dbname_v1';
MongoClient.connect(mongoUrlV1)
  .then(client => {
    const db = client.db();
    app.locals.db_v1 = db;
    console.log('Connected to MongoDB native on port 27017');
  })
  .catch(error => console.error(error));

// Koneksi Mongoose
const mongoUrlV2 = 'mongodb://mongodb_v2:27017/dbname_v2';
mongoose.connect(mongoUrlV2)
  .then(() => console.log('Connected to MongoDB with Mongoose on port 27018'))
  .catch(error => console.error(error));

// Routes untuk versi 1 (MongoDB native)
app.use('/api/v1/users', userRouterV1);

// Routes untuk versi 2 (Mongoose)
app.use('/api/v2/users', userRouterV2);

// Jalankan server dan hubungkan ke PostgreSQL
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
