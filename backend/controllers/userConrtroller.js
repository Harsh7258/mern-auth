import expressAsyncHandler from "express-async-handler";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public

const authUser = expressAsyncHandler(async (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "Authenticated user."
    })
})

export { authUser }