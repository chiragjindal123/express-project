const asyncHandler = require('express-async-handler');

//@desc register a user
//@route POST /api/users/register
//@access Public
const resgisteruser = asyncHandler(async (req,res) => {
    res.json({message: "Register the user"});
});


//@desc login a user
//@route POST /api/users/login
//@access Public
const loginuser = asyncHandler(async (req,res) => {
    res.json({message: "Login the user"});
});

//@desc current user info
//@route POST /api/users/current
//@access private
const currentuser = asyncHandler(async (req,res) => {
    res.json({message: "current user info"});
});

module.exports = {resgisteruser , loginuser , currentuser};