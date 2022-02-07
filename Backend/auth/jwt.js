import JWT from "jsonwebtoken";

export const generateToken = (user) => {
  return JWT.sign({ user }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
