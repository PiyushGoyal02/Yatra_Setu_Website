const JWT = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookie
    const token = req.cookies.token;

    // Check token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please login."
      });
    }

    // Verify JWT
    const decoded = JWT.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store user information in request
    req.user = decoded;

    // Example:
    // req.user.id
    // req.user.email

    next();

  } catch (error) {
    console.log("Auth Middleware Error:", error.message);

    // Token expired
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired. Please login again."
      });
    }

    // Invalid token
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Invalid token. Please login again."
      });
    }

    // Other errors
    return res.status(500).json({
      success: false,
      message: "Authentication failed"
    });
  }
};

module.exports = authMiddleware;