const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/pet-adoption', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database"))
    .catch(() => console.log("Could not establish a connection to the database"));