import jwt from "jsonwebtoken";

function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });
  try {
    req.user = jwt.verify(token, "secret_key");
    next();
  } catch {
    res.status(400).json({ message: "Invalid token" });
  }
}
