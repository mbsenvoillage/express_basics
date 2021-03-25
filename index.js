const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger');
/*
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 */

//Init middleware
//app.use(logger);

// Make folder static, so that you don't have to manually code every route
// use() is for middleware
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Members api routes
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
