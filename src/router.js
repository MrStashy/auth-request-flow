const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mockUser = {
  username: "authguy",
  password: "mypassword",
  profile: {
    firstName: "Chris",
    lastName: "Wolstenholme",
    age: 43,
  },
};

router.post("/login", (req, res) => {
  const payload = { username: mockUser.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  console.log(token)
  res.status(200).json(token);
});

router.get("/profile", (req, res) => {
  const authKey = req.headers.bearer;
  try {
    jwt.verify(authKey, process.env.JWT_SECRET);
    res.status(200).json({ profile: mockUser.profile });
  } catch (e) {
    res.status(401).json({ error: "Login failed" });
  }
});

module.exports = router;
