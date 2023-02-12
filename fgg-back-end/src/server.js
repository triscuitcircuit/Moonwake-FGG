const express = require("express");
const cors = require("cors");
const db = require("./Database");
const logger = require('morgan');


const app = express();

app.use(cors());
app.use(express.json());

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