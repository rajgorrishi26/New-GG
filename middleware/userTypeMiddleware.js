const userTypeMiddleware = (allowedUserTypes = []) => {
    return (req, res, next) => {
      // Check if user type is allowed
      if (!allowedUserTypes.includes(req.userDetails.typeOfUser)) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
      }
  
      next();
    };
  };
  
  module.exports = userTypeMiddleware;
  