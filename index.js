const express = require('express');
const app = express();
const matchRouter= require('./routes/match');

const PORT = 3000;

//ROUTERS
app.use('/match',matchRouter);


app.get('/health',(req,res) => {
    console.log('Funciona!');
    res.json("Funciona");
});
app.listen(PORT,() => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});