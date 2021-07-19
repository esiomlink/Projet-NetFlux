const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());


require('./routes')(app);


app.listen(port, () => {
  console.log(`connecter au port :${port}`);
});
app.get('/', (req, res) => res.send('Home Page Route'));
