const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 3080);

// Middlewares
app.use(express.json());
app.use(cors())

// End-point
app.use(require('./routes/search'));

// Start server
const server = app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});