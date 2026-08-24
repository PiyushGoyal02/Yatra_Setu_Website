const AuthModel = require("../Model/AuthModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

// Login API
exports.LoginAPI = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // Validation
    if (!Email || !Password) {
      return res.status(400).json({
        success: false,
        message: "We need all fields"
      });
    }

    // Check Email
    const checkEmail = await AuthModel.findOne({ Email });

    if (!checkEmail) {
      return res.status(404).json({
        success: false,
        message: "User is not available"
      });
    }

    // Check Password
    const passwordCheck = await bcrypt.compare(
      Password,
      checkEmail.Password
    );

    if (!passwordCheck) {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect, Please Check"
      });
    }

    // Updated JWT payload
    const JWTPayLoad = {
      email: checkEmail.Email,
      id: checkEmail._id
      // accountType: checkEmail.accountType
    };

    // Generate JWT
    const token = JWT.sign(
      JWTPayLoad,
      process.env.JWT_SECRET,
      {
        expiresIn: "2h"
      }
    );

    // Cookie Options
    const CookieOptions = {
      expires: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    // Log the user ID
    console.log(`User logged in: ${checkEmail._id}`);

    // Cookie pass and return necessary user info
    return res
      .cookie("token", token, CookieOptions)
      .status(200)
      .json({
        success: true,
        message: "Login Successfully",
        token,
        userId: checkEmail._id,
        email: checkEmail.Email
        // accountType: checkEmail.accountType
      });

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: "User can't login successfully"
    });
  }
};


// Signup API
exports.SignUpAPI = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Email,
      MobNumber,
      Password,
      DOB,
      Gender
    } = req.body;

    // Validation
    if (
      !FirstName ||
      !LastName ||
      !Email ||
      !MobNumber ||
      !Password ||
      !DOB ||
      !Gender
    ) {
      return res.status(400).json({
        success: false,
        message: "Signup Details can't access, we need all details"
      });
    }

    // Check Email
    const checkEmail = await AuthModel.findOne({ Email });

    // User already exists
    if (checkEmail) {
      return res.status(409).json({
        success: false,
        message: "User Already Available."
      });
    }

    // Hash Password
    const hashPassword = await bcrypt.hash(Password, 10);

    // Create New User
    const newUserDetails = await AuthModel.create({
      FirstName,
      LastName,
      Email,
      Password: hashPassword,
      DOB,
      Gender,
      MobNumber
    });

    // Success Response
    return res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: newUserDetails
    });

  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      success: false,
      message: "User can't signup new account"
    });
  }
};