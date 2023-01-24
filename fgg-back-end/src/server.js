const express = require("express");
const cors = require("cors");
const db = require("./Database");


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.json({ message: "back-end" });
// });

require("./routes/AB_ATTR_routes")(app);

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

