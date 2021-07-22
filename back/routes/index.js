const moviesRouter = require('./movies')
const usersRouter = require('./users')
const roleRouter = require('./role')
const loginRouter = require('./authentification');
const categoryRouter = require('./category')
const commentRouter = require('./comment')
const favoritRouter = require('./favorites')

module.exports = (app) => {

app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', roleRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/comments', commentRouter);
app.use('/api/favorites', favoritRouter);
app.use('/login', loginRouter);

}







 
