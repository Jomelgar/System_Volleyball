const express = require('express');
const app = express();
const matchRouter= require('./routes/match');
const playerRouter = require('./routes/player');
const refereeRouter = require('./routes/referee');
const tournamentRouter = require('./routes/tournament');
const teamRouter = require('./routes/team');

const PORT = 3000;

//ROUTERS
app.use('/match',matchRouter);
app.use('/referee',refereeRouter);
app.use('/player',playerRouter);
app.use('/tournament',tournamentRouter);
app.use('/team',teamRouter);



app.get('/health',(req,res) => {
    console.log('Funciona!');
    res.json("Funciona");
});
app.listen(PORT,() => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});