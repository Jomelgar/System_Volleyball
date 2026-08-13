const express = require('express');
const app = express();
const matchRouter= require('./src/routes/match');
const playerRouter = require('./src/routes/player');
const refereeRouter = require('./src/routes/referee');
const tournamentRouter = require('./src/routes/tournament');
const teamRouter = require('./src/routes/team');
const translatorRouter = require('./src/routes/translator');

const PORT = 3000;

app.use(express.json());

//ROUTERS
app.use('/match',matchRouter);
app.use('/referee',refereeRouter);
app.use('/player',playerRouter);
app.use('/tournament',tournamentRouter);
app.use('/team',teamRouter);
app.use('/translate', translatorRouter);



app.get('/health',(req,res) => {
    console.log('Funciona!');
    res.json("Funciona");
});
app.listen(PORT,() => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});