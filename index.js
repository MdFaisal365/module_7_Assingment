require('dotenv').config();
const app = require('./app');

const PORT = process.env.RUNNING_PORT || 5500;

app.listen(PORT);