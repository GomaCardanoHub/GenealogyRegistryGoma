const express = require('express');
const app = express();
const db = require('./connect/index');

db.authenticate()
.then(()=>console.log('nous sommes connecter'))
.catch(err => console.log(err));

app.use(express.json());

app.use('/api/personne', require('./src/routes/personne'));
app.use('/api/mariage', require('./src/routes/mariage'));

const port = process.env.PORT || 4000;

app.listen(port, ()=>console.log(`server run on port ${port}...`));