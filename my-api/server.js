const connection = require('./db-config');
const express = require('express');
const app = express();
const port = process.env.PORT;
let cors = require('cors');
app.use(cors());
app.use(express.json())


// **********************delete**********************************

app.delete('/api/user/:id', (req, res) => {
  const moviesId = req.params.id;
  connection.query('DELETE FROM movies WHERE id = ?', [moviesId], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('😱 Error deleting an user');
    } else {
      res.status(200).send('🎉 user deleted!');
    }
  });
});

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
// **********************Put********************************

app.put('/api/user/:id', (req, res) => {
  const moviesId = req.params.id;
  const moviesPropsToUpdate = req.body;
  connection.query(
    'UPDATE movies SET ? WHERE id = ?',
    [moviesPropsToUpdate, moviesId],
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error updating a user');
      } else {
        res.status(200).send('user updated successfully 🎉');
      }
    }
  );
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
//************************************************Post******************************* */

app.post('/api/user', (req, res) => {
  const { user_id, user_psedo, user_password, user_firstname, user_lastname, user_email } = req.body;
  connection.query(
    'INSERT INTO movies(user_id, user_psedo, user_password, user_firstname, user_lastname,user_email) VALUES(?,?,?,?,?,?)',
    [user_id, user_psedo, user_password, user_firstname, user_lastname, user_email],
    (err, result) => {
      if (err) {
        res.send(500).send("erreur de sauvegarde de l'utilisateur");
      } else {
        res.status(201).send("l' utilisateur a bien ete sauvegarder");
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

/***************************Get********************** */

app.get('/api/user', (req, res) => {
  connection.query('SELECT * FROM user', (err, result) => {
    if (err) res.status(500).send('erreur lors de la requette');
    else res.status(200).send(result);
  });
});

app.get('/api/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, result) => {
    if (err) res.status(500).send('erreur lors de la requette');
    else res.status(200).send(result);
  });
});

/*********************Connections*********************** */

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
