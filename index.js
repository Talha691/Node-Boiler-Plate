
const express = require('express');
const app = express();
const router = express.Router();
const connectDB = require('./helper/helper'); 
const authRoute = require('./routes/route')
// Connect to the database
connectDB();
app.use(express.json());
app.use('/', authRoute)

const PORT = 3000;
app.listen(PORT, function () 
{
  console.log(`Server is running on port ${PORT}`);
});
