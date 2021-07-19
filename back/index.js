const connection = require('./db-config');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let cors = require('cors');
app.use(cors());
app.use(express.json())


// **********************delete**********************************

app.delete('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('DELETE FROM user WHERE user_id = ?', [userId], (err) => {
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

//modify a user
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

// modify a movie
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

// add a user


app.post('/api/user', (req, res) => {
  const { user_psedo, user_password, user_firstname, user_lastname, user_email } = req.body;
  console.log(req.body)
  connection.query(
    'INSERT INTO user(user_psedo, user_password, user_firstname, user_lastname,user_email) VALUES(?,?,?,?,?)',
    [ user_psedo, user_password, user_firstname, user_lastname, user_email],
    (err, result) => {
      if (err) {
        res.send(500).send("erreur de sauvegarde de l'utilisateur");
      } else {
        res.status(201).send("l' utilisateur a bien ete sauvegarder");
      }
    }
  );
});

//add a movie 
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

// filter by color || max duration
app.get('/api/movies', (req, res) => {
  let sql = 'SELECT * FROM movies';
  const sqlValues = [];
  if (req.query.color) {
    sql += ' WHERE color = ?';
    sqlValues.push(req.query.color);
  }
    if (req.query.max_duration) {
      if (req.query.color) sql += ' AND duration <= ? ;';
      else sql += ' WHERE duration <= ?';

      sqlValues.push(req.query.max_duration);
    }
  connection.query(sql, sqlValues, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving movies from database');
    } else {
      res.json(results);
    }
  });
});

// fiter by ID
app.get('/api/movies/:id', (req, res) => {
  const movieId = req.params.id;
  connection.query(
    'SELECT * FROM movies WHERE id = ?',
    [movieId],
    (err, results) => {
      if (err) {
        res.status(500).send('Error retrieving movie from database');
      } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('movie not found');
      }
    }
  );
});

// return evry videos
app.get('/api/movies', (req, res) => {
  connection.query('SELECT * FROM movies', (err, result) => {
    if (err) res.status(500).send('erreur lors de la requette');
    else res.status(200).send(result);
  });
}); 
// return evry user
app.get('/api/user', (req, res) => {
  connection.query('SELECT * FROM user', (err, result) => {
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
app.get('/', (req, res) => res.send('Home Page Route'));

app.listen(port, () => {
  console.log(`connecter au port :${port}`);
});
