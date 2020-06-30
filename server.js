const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');

app.use('/api/auth', require('./server/routes/auth.routes'));
app.use('/api/pets', require('./server/routes/pet.routes'));
app.use('/api/users', require('./server/routes/users.routes'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
