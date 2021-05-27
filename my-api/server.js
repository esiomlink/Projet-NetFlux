const connection = require('./db-config');
const express = require('express');
const app = express();
const port = process.env.PORT;
let cors = require('cors');
app.use(cors());
app.use(express.json())

app.delete('/api/movies/:id', (req, res) => {
  const moviesId = req.params.id;
  connection.query('DELETE FROM movies WHERE id = ?', [moviesId], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('😱 Error deleting an movies');
    } else {
      res.status(200).send('🎉 Movies deleted!');
    }
  });
});

app.put('/api/movies/:id', (req, res) => {
  const moviesId = req.params.id;
  const moviesPropsToUpdate = req.body;
  connection.query(
    'UPDATE movies SET ? WHERE id = ?',
    [moviesPropsToUpdate, moviesId],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating a movies');
      } else {
        res.status(200).send('Movies updated successfully 🎉');
      }
    }
  );
});

app.post('/api/movies', (req, res)=>{
  const { title, director, year, color, duration,img } = req.body;
 connection.query(
   'INSERT INTO movies(title, director, year, color, duration,img) VALUES(?,?,?,?,?,?)',
   [title, director, year, color, duration,img],
   (err, result)=>{
     if(err){
       res.send(500).send('erreur de sauvegarde du film')
     }else {
       res.status(201).send('le filme a bien ete sauvegarder')
     }
   }
 )
});
app.get('/api/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, result) => {
    if (err) res.status(500).send('erreur lors de la requette');
    else res.status(200).send(result);
  });
});
connection.connect((err) => {
  if (err) console.error('erreur');
  else
    console.log(
      'connected to database with threadId :  ' + connection.threadId
    );
});
app.get('/api', (req, res) => {
  res.send('welcom');
});
app.listen(port, () => {
  console.log(`connecter au port :${port}`);
});
