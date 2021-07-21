const moviesRouter = require('./movies')
const usersRouter = require('./users')
const roleRouter = require('./role')
const loginRouter = require('./authentification');
const categoryRouter = require('./category')

module.exports = (app) => {

app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', roleRouter);
app.use('/api/categories', categoryRouter);
app.use('/login', loginRouter);

}







 
