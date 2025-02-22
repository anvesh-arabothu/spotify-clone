module.exports = (req, res, next) => {
    const { password, confirmPassword } = req.body;
  
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }
  
    next();
  };
  