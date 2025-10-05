const mongoose = require('mongoose')

const spreadsheetSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    spreadsheetId: { 
        type: String, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    mappings: { 
        type: Object, 
        default: {} 
    }, // { customers: "Sheet1!A:D" }
})

module.exports = mongoose.model('Spreadsheet', spreadsheetSchema);
