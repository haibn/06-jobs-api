const Spreadsheet = require('../models/Spreadsheet')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const getAllSpreadsheets = async (req, res) => {
    res.send('Get all spreadsheets linked to user');
}
const getSpreadsheet = async (req, res) => {
    res.send('Get spreadsheet');
}

const addSpreadsheet = async (req, res) => {
    // attach logged-in user from auth middleware
    req.body.userId = req.user.userId

    // create document
    const spreadsheet = await Spreadsheet.create(req.body)
    res.status(StatusCodes.CREATED).json({spreadsheet})
}

const updateSpreadsheet = async (req, res) => {
    res.send('Update spreadsheet details');
}

const deleteSpreadsheet = async (req, res) => {
    res.send('Delete a spreadsheet');
}

module.exports = {
    getAllSpreadsheets,
    getSpreadsheet,
    addSpreadsheet,
    updateSpreadsheet,
    deleteSpreadsheet
};