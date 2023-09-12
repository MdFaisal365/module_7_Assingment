const express = require('express');
const app = new express();
const router = require('./src/Routes/api');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const multer  = require('multer');
const validator = require('validator');
const mysql = require('mysql');

const limiter = rateLimit({
	windowMs: 35 * 60 * 1000,
	max: 200,
	standardHeaders: 'draft-7',
	legacyHeaders: false,
})


app.use(hpp());
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(mongoSanitize());


app.use(express.json());
app.use('/', router);

module.exports = app;