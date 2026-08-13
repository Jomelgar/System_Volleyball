const express = require('express');
const app = express();
const matchRouter= require('./routes/match');
<<<<<<< Updated upstream
const playerRouter = require('./routes/player');
const refereeRouter = require('./routes/referee');
const tournamentRouter = require('./routes/tournament');
const teamRouter = require('./routes/team');
=======
const characterRouter = require('./routes/character');
>>>>>>> Stashed changes

const PORT = process.env.PORT || 3001;

//ROUTERS
app.use('/match',matchRouter);
<<<<<<< Updated upstream
app.use('/referee',refereeRouter);
app.use('/player',playerRouter);
app.use('/tournament',tournamentRouter);
app.use('/team',teamRouter);

=======
app.use('/characters',characterRouter);
>>>>>>> Stashed changes


app.get('/health',(req,res) => {
    console.log('Funciona!');
    res.json("Funciona");
});
app.listen(PORT,() => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});