const express = require('express');
const db = require("./src/connect/index");
const cors = require('cors');
const route=require('./src/router/appRouter')
const app = express();

var corpsOptions={
    origin:'https://localhost:8081'
}
app.use(cors(corpsOptions));

app.use(express.urlencoded({ extended: true }));
app.use('/app/url',route);
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Vous êtes sur le serveur ${port}`));