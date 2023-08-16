const mongoose = require('mongoose');

// create a schema for issue
const issueSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    labels:[
        {
            type: String,
            required: true
        },
    ],

});

const Issue = mongoose.model('Issue', issueSchema);
module.exports = Issue