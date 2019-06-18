module.exports = {
    postAuthenticate: (req, res, next) => {
        res.json({ status: "success" });
    }
}