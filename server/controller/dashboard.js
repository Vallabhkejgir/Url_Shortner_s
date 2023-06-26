const ShortUrl = require("../models/shortUrl.js");
exports.dashboard = async (req, res) => {
  const userId = req.user.objectID;
  const shortUrls = await ShortUrl.url(userId);
  res.render("index", { shortUrls: shortUrls });
};
exports.addUrl = async (req, res) => {
  const { fullUrl, note } = req.body;
  console.log("url: ",fullUrl)
  const userId = req.user.objectID;
  try {
    await ShortUrl.addUrl(userId, fullUrl, note);
    res.redirect("/");
  } catch (error) {
    throw error;
  }
};
exports.increase = async (req, res) => {
  console.log("req.params.shortUrl: ",req.params.shortUrl)
  const userId = req.user.objectID;
  try {
    const response = await ShortUrl.increment(userId, req.params.shortUrl);
    console.log("response: ",response)
    res.redirect(response.full);
  } catch (error) {
    throw error;
  }
};
