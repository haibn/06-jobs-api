const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {
    const user = await User.create({...req.body})
    res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
    res.send('User logged in');
}

const getCurrentUser = async (req, res) => {
    res.send('Current user details');
}

module.exports = {
    register,
    login,
    getCurrentUser
};