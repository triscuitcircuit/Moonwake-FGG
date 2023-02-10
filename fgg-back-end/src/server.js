const express = require("express");
const cors = require("cors");
const db = require("./Database");
const bodyParser = require('body-parser');
const logger = require('morgan');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    express.json();
});

app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.json({ message: "back-end" });
// });
app.use(bodyParser.json())
app.use(logger('dev'))

require("./routes/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');    })
    .catch((err) => {
        console.error('Unable to connect to the database: ', err);
    });

module.exports = app