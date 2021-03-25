const Member = require('../model/memberModel');
const uuid = require('uuid');

async function addMember(req, res) {
    try {
        const newMember = {
            id: uuid.v4(),
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }

        if(!newMember.name || !newMember.email || !newMember.username) return res.status(400).json({message: 'Name, username and email are missing.'})
        else {
            const addedMember = await Member.insert(newMember);
            res.json(newMember);
        }


    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addMember
}
