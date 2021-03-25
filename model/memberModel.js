let members = require('../data.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');
const path = require('path');

function insert(member) {
    return new Promise((resolve, reject) => {
        const newMember = {...member, id: uuidv4()};
        members.push(newMember);
        writeDataToFile(path.join(__dirname, '../data.json'), members);
        resolve(newMember);
    })
}

module.exports = {
    insert
}
