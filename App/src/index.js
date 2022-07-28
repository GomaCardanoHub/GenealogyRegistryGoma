const express = require('express');
const db = require("./connect/index");
const cors = require('cors');
const route=require('./router/appRouter')
const app = express();
const port = process.env.PORT || 5000;
var corpsOptions={
    origin:'https://localhost:8081'
}
app.use(cors(corpsOptions));
app.use(express.urlencoded({ extended: true }));
app.use('/app/url',route);
app.use(express.json());
app.listen(port,()=>console.log(`Vous êtes sur le serveur ${port}`));