import expressAsyncHandler from "express-async-handler";

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
    res.status(200).json({
        status: "success",
        message: "signup"
    })
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