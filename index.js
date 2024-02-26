const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "static/index.html"));
});

app.post("/signup", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    console.log(username + " " + password);

    res.send("Form Submitted Successfully");
})

app.listen(4000);