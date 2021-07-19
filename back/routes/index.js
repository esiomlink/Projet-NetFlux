const moviesRouter = require('./movies')


module.exports = (app) => {

app.use('/api/movies', moviesRouter);

}








