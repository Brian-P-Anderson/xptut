const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send('Post List');
});

router.get("/new", (req, res) => {
  res.send('Post New Form');
});

router.post('/', (req, res) => {
  res.send('Create Post');
});

router.get('/:id', (req, res) => {
  res.send(`Post Get: ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.send(`Post Update: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Post Delete: ${req.params.id}`);
});

module.exports = router;