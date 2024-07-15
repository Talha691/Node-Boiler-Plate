const User = require('../models/user');

const login = (req, res) => {
    const email = req.body.email;
    if (email === 'abc@gmail.com') {
        res.status(200).json({ message: 'User Verified' });
    } else {
        res.status(400).json({ message: 'Invalid User' });
    }
};


const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        user = new User({
            username,
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = { signup, login };

