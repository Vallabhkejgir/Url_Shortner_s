const shortUrl = require("../schema/shortUrl");
const mongoose = require("mongoose");

exports.url = async (userId) => {
  try {
    const urls = await shortUrl
      .find({
        user: new mongoose.Types.ObjectId(userId),
      })
      .exec();
    return urls; // Return the URLs as JSON
  } catch (error) {
    console.error("Error fetching URLs:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
exports.addUrl = async (userId, Url, note) => {
  try {
    await shortUrl.create({
      full: Url,
      user: new mongoose.Types.ObjectId(userId),
      note: note,
    });
  } catch (error) {
    console.log("error while adding url: ", error);
    throw error;
  }
};
exports.increment = async (userId, Url) => {
  try {
    const response = await shortUrl.findOne({
      short: Url,
      user: new mongoose.Types.ObjectId(userId),
    });
    if (response) {
      response.clicks++;
      response.save();
    }
    return response;
  } catch (error) {
    console.log("error while adding url: ", error);
    throw error;
  }
};

exports.search = async (userId, search) => {
  try {
    const searchRegex = new RegExp(search, "i");
    const results = await shortUrl.find({
      $and: [
        { user: new mongoose.Types.ObjectId(userId) },
        { $or: [{ full: searchRegex }, { note: searchRegex }] },
      ],
    });

    return results;
  } catch (error) {
    // Handle error
    console.error(error);
    return null;
  }
};
