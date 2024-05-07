import expressAsyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = expressAsyncHandler(async (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "logged in user."
    })
})

// @desc    Signup new user
// @route   POST /api/users/signup
// @access  Public

const signupUser = expressAsyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email })
    if(userExists){
        res.status(400)
        throw new Error('User already exists.')
    }

    const user = await User.create({
        name,
        email, 
        password
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            status: "success",
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else{
        res.status(400);
        throw new Error('Invalid user data.')
    }
})

// @desc    logout user
// @route   POST /api/users/logout
// @access  Public

const logoutUser = expressAsyncHandler(async (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "logout user"
    })
})

// @desc    user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = expressAsyncHandler(async (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "user profile"
    })
})

// @desc    Update user profile
// @route   PUT /api/users/auth
// @access  Private

const updateUserProfile = expressAsyncHandler(async (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "update user"
    })
})

export { authUser,
    signupUser, 
    logoutUser,
    updateUserProfile,
    getUserProfile
 }