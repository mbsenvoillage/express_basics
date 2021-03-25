const Member = require('../model/memberModel');
const uuid = require('uuid');
let members = require('../data.json');


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
            res.json(addedMember);
        }


    } catch (e) {
        console.log(e);
    }
}

async function updateMember(req, res) {
    try {
        let idx = 0;
        if(members.some((m, i)=>{idx = i; return m.id===+req.params.id})) {
            let updatedMember = {...members[idx], ...req.body};
            updatedMember = await Member.update(updatedMember, idx);
            res.json(`Member with id ${updatedMember.id} has been updated`);
        }
        else res.status(400).json({message: `No member with the id ${req.params.id}`});
    } catch (e) {
        console.log(e);
    }
}

async function deleteMember(req, res) {
    try {
        if(members.some((m, i)=>m.id===+req.params.id)) {
            let msg = await Member.remove(+req.params.id);
            res.json(msg);
        }
        else res.status(400).json({message: `No member with the id ${req.params.id}`});
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addMember,
    updateMember,
    deleteMember
}
