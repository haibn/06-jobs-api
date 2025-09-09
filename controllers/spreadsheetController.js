const getAllSpreadsheets = async () => {
    res.send('Get all spreadsheets linked to user');
}
const getSpreadsheet = async () => {
    res.send('Get spreadsheet');
}

const addSpreadsheet = async () => {
    res.send('Add a new spreadsheet');
}

const updateSpreadsheet = async () => {
    res.send('Update spreadsheet details');
}

const deleteSpreadsheet = async () => {
    res.send('Delete a spreadsheet');
}

module.exports = {
    getAllSpreadsheets,
    getSpreadsheet,
    addSpreadsheet,
    updateSpreadsheet,
    deleteSpreadsheet
};