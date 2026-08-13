const express = require('express');
const app = express();
const translatorRouter = require('./src/routes/translator');
const matchRouter= require('./routes/match');
const playerRouter = require('./routes/player');
const refereeRouter = require('./routes/referee');
const tournamentRouter = require('./routes/tournament');
const teamRouter = require('./routes/team');
const characterRouter = require('./routes/character');

const PORT = process.env.PORT || 3001;

app.use(express.json());

//ROUTERS
app.use('/match',matchRouter);
app.use('/referee',refereeRouter);
app.use('/player',playerRouter);
app.use('/tournament',tournamentRouter);
app.use('/team',teamRouter);
app.use('/translate', translatorRouter);

app.use('/characters',characterRouter);


app.get('/health',(req,res) => {
    console.log('Funciona!');
    res.json("Funciona");
});
app.listen(PORT,() => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});