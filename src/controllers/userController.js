const { validationResult } = require('express-validator/check');

module.exports = {
    postLogin: (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var username = req.body.username;
        var password = req.body.password;

        if (username === 'juan' && password === '12345678') {
            return res.json({ user: req.body });
        } else {
            return res.status(401).json({ error: 'the credentials are invalid' });
        }

    },
    postRegister: (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        if (req.body.password !== req.body.verifyPassword) {
            return res.status(422).json({ error: 'The verification of the password is invalid' });
        }

        return res.status(201).json({ message: 'The user registered successfully' });
    }
};