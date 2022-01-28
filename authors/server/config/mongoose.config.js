const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection Established"))
    .catch(err => console.log("something went wrong when connectiong to the database : ", err));