const express = require("express");

const app = express();

app.use(express.static('public')); //Make everything inside of public/ available



//app.get(path, code);
// Get for /
app.get("/", (request, res, next) => {

    res.sendFile(__dirname + "/view/home-page.html");
})


// GET /contact
app.get('/contact', (req, res, next) => 

    res.sendFile(__dirname + "/view/contact-page.html")

    )

app.listen(3000, () => console.log('My first app listening on port 3000! '));
