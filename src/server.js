const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const User = require('./models/User'); 

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017/community';

app.use(bodyParser.json());

app.post('/signup-form', async (req, res) => {
  let client;
  try {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();
    const usersCollection = db.collection('users');

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const result = await usersCollection.insertOne(req.body);
    console.log('New user added:', result.ops[0]);

    res.status(201).json({ message: 'User created successfully', user: result.ops[0] });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  } finally {
    if (client) {
      await client.close();
      console.log('Disconnected from MongoDB');
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
