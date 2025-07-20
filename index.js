const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const projectroutes=require('./routes/projectroute')
const skillroutes=require('./routes/skillroute')
const achievementroutes=require('./routes/achievementroutes')
const contactroutes=require('./routes/contactroutes')
require('dotenv').config(); 

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err.message));


app.use('/api/projects', projectroutes);
app.use('/api/skills', skillroutes);
app.use('/api/achievements', achievementroutes);
app.use('/api/contact', contactroutes);

app.listen(5000, () => console.log('Server running on port 5000'));
