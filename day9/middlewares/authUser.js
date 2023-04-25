const authUser = (req, res, next) => {
  if (!req.user) {
    res.status(403);
    return res.send("You are not logged in!");
  }
  next();
};

const authRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401);
      return res.send("Not Allowed");
    }
    next();
  };
};

module.exports = { authUser, authRole };
