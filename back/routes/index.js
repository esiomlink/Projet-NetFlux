const moviesRouter = require('./movies')
const usersRouter = require('./users')
const roleRouter = require('./role')
const loginRouter = require('./authentification');

module.exports = (app) => {

app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', roleRouter);
app.use('/login', loginRouter);

}








