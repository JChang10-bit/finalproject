/* Server Side  for Graphical Password Authentication */

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const logger = require("morgan");

// Setup our Express pipeline
let app = express();
// Setup pipeline logging
app.use(logger("dev"));
// Setup pipeline support for static pages
app.use(express.static(path.join(__dirname, "../../public")));
// Setup pipeline session support
app.use(
    session({
        name: "session",
        secret: "graphical password",
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: "/",
            httpOnly: false,
            secure: false
        }
    })
);
// Finish pipeline setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Handle POST to create a new user account - send back TwoFactor secret info
app.post("/v1/user", async (req, res) => {
    try {
        req.session.secret = req.body;
        res.status(200).send({ message: "User Created" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "Oops" });
    }
});

// Use both password and two-factor TOTP for authentication
app.post("/v1/session", (req, res) => {
    // Respond according to use authentication
    if (JSON.stringify(req.body) === JSON.stringify(req.session.secret)) {
        res.status(200).send({ message: "You are right!" });
    } else {
        res.status(401).send({ error: "unauthorized" });
    }
});

let server = app.listen(8080, () => {
    console.log("Graphical Password Authentication example app listening on " + server.address().port);
});