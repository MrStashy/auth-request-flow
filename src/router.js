const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const mockUser = {
    username: 'authguy',
    password: 'mypassword',
    profile: {
        firstName: 'Chris',
        lastName: 'Wolstenholme',
        age: 43
    }
};

router.post('/login', (req, res) => {
    const payload = { username: mockUser.username }
    const token = jwt.sign(payload, process.env.JWT_SECRET)
    res.status(200).json(token)
});

router.get('/profile', (req, res) => {
  
});


module.exports = router;
