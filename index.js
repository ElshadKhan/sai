const express = require('express');
const aeroRouter = require('./routes/aero.routes.js');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api', aeroRouter);

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));