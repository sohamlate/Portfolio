const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoute = require('./routes/contactRoutes');

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB

const db = process.env.MONGO_URI
console.log("Start working line ",db);
mongoose.connect(db)
.then(()=>{console.log("db connected successfuly")})
.catch((err)=>{
    console.error(err);
    process.exit(1);
});    

app.use('/api', contactRoute); 


// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
