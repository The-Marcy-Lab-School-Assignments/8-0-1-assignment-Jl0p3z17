const express = require('express')
const app = express();
const path = require('path');

//MiddleWare controller
const logRoutes = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
}

const serveStatic = express.static(path.join(__dirname, '../dist'));

//endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//middleware function to serve static assets
app.use(logRoutes);
app.use(serveStatic);


//listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));