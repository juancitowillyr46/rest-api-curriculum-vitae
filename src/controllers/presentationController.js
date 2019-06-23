var validationResult = require('express-validator/check');

module.exports = {
    create: (req, res, next) => {

        var errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        return res.json({ presentation: req.body });
    },
    read: (req, res, next) => {
        console.log(req.params.id);
        var id = req.params.id;

        if (id == undefined) {
            return res.status(422).json({ errors: 'Parameter invalid' });
        }

        if (id !== 1) {
            return res.status(401).json({ errors: 'Parameter invalid' });
        }

        var presentation = {
            "id": id,
            "firstName": "Juan",
            "lastName": "Rodas",
            "summary": "Developer",
            "country": "Perú"
        };

        return res.json({ presentation: presentation });
    }
};