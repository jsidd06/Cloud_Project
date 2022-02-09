import JWT from "jsonwebtoken";

// generating a token
export const generateToken = (user) => {
  return JWT.sign({ user }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// checking token to manager user session

export const isAuthenticated = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "ops your token expire has been expired",
        });
      }
      req.user = decoded.user;
      next();
    });
  } else {
    return res.status(401).json({
      message: "Authentication token is not available",
    });
  }
};
