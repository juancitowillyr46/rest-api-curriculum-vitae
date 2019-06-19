module.exports = {
    postLogin: (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        if (username === 'juan' && password === '12345678') {
            return res.json({ user: req.body });
        } else {
            return res.status(401).json({ error: "Acceso incorrecto" });
        }
    },
    postRegister: (req, res, next) => {
        res.json({ status: "success register" });
    }
};