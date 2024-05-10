import expressAsyncHandler from "express-async-handler";
import User from "../models/users.model.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        res.status(200).json({
            status: "success",
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password.')
    }
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
    res.clearCookie('jwt', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({
        status: "success",
        message: "User logged out."
    })
})

// @desc    user profile
// @route   GET /api/users/profile
// @access  Private

const getUserProfile = expressAsyncHandler(async (req, res, next) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    res.status(200).json({
        status: "success",
        user: user
    })
})

// @desc    Update user profile
// @route   PUT /api/users/auth
// @access  Private

const updateUserProfile = expressAsyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user._id)

    if(user){
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if(req.body.password){
        user.password = req.body.password
      }

      const updatedUser = await user.save()
      res.status(200).json({
        status: "success",
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email
      });
    } else {
        res.status(404)
        throw new Error("User not Found!")
    }
})

// @desc    Delete user
// @route   POST /api/users/delete
// @access  Private

const deleteUser = async(req, res) => {
    const deleteId = req.user._id
    const user = await User.findByIdAndDelete(deleteId)
    res.clearCookie('jwt')
    res.status(200).json({
        state: "success",
        user,
        message: `Deleted user: ${user}`
    })
}

export { authUser,
    signupUser, 
    logoutUser,
    updateUserProfile,
    getUserProfile,
    deleteUser
 }