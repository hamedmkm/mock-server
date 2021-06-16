const express = require('express');
const cors = require('cors');
const rememberRouter = require('./remember.router');

const app =express();
app.use(cors());
app.use(express.json());

// remember route handler
app.use('/remember', rememberRouter);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Mock server is running on port ${port}`));