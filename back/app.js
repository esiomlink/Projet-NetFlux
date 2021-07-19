const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));


require('./routes')(app);


app.listen(port, () => {
  console.log(`connecter au port :${port}`);
});
app.get('/', (req, res) => res.send('Home Page Route'));
