import express from 'express';

const v1Router = express.Router();

// Routes here

// Test route
v1Router.get('/', (req, res) => {
  res.status(200).json();
});

export default v1Router;
