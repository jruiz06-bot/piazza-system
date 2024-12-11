const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign({ id: user._id, name: user.name }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRATION,
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
