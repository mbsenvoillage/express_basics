const express = require('express');
const router = express.Router();
let members = require('../../data.json');
const { addMember } = require('../../controller/memberController');


// Get all members
router.get('/', (req, res) => {
    res.json(members);
})

// Get single member
router.get('/:id', (req, res) => {
    if(members.some(m=>m.id===+req.params.id)) res.json(members.filter(m=>m.id===+req.params.id));
    else res.status(400).json({message: `No member with the id ${req.params.id}`});
})

// Create member
router.post('/', (req, res) => {
    addMember(req, res);
})

module.exports = router;
