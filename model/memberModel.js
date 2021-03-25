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

function update(member, index) {
    return new Promise((resolve, reject) => {
        members[index] = member;
        writeDataToFile(path.join(__dirname, '../data.json'), members);
        resolve(member);
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        let newList = members.filter(m=>m.id !== +id);
        writeDataToFile(path.join(__dirname, '../data.json'), newList);
        resolve({message: "Member has been deleted"});
    })
}

module.exports = {
    insert,
    update,
    remove
}
