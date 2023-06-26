const ShortUrl = require("../models/shortUrl.js");
exports.search = async (req, res) => {
    const userId = req.user.objectID;
    const searchText = req.query.search;
    try {
        const results = await ShortUrl.search(userId, searchText);
        res.render("index", { shortUrls: results });
    } catch (error) {
        throw error;
    }
}