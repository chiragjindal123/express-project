const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const port = process.env.PORT || 3000;

// app.get('/api/contacts', (req, res) => {
//     res.send('get all contacts');
// });

// app.get('/api/contacts', (req, res) => {
//     res.json({ message : 'get all contacts'});
// });
// app.get('/api/contacts', (req, res) => {
//     res.status(200).json({ message : 'get all contacts'});
// });

 
app.use(cors());
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

console.log('Hello World');


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
