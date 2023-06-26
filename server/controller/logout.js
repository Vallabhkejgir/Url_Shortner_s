// Logout controller
const logout = (req, res) => {
  res.clearCookie("token"); // Clear the token cookie
  res.redirect("/login"); // Redirect to the login page
};

// Export the logout controller
module.exports = logout;
