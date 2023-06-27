const user = require("../schema/user");

exports.registerUser = async (email, hashPassword) => {
  const newUser = new user({
    email: email,
    password: hashPassword,
  });
  try {
    const dataToSave = newUser.save();
    return dataToSave;
  } catch (error) {
    return error;
  }
};

exports.fetchUserByEmail = async (email) => {
  try {
    const result = await user.findOne({ email: email });
    return result;
  } catch (error) {
    return error;
  }
};
