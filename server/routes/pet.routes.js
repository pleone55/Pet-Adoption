const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Pet = require('../models/pet.models');

//get the list of pets
router.get('/', auth, async(req, res) => {
    try {
        const pets = await Pet.find({ user: req.user.id }).sort({ date: -1 });
        res.json(pets);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get specific pet
router.get('/:id', auth, async(req, res) => {
    try {
        const pet = await Pet.findOne({ user: req.user.id });
        res.json(pet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//create pet
router.post('/', [auth,
    check('petName', 'Pet name is required').not().isEmpty(), 
    check('petType', 'Pet type is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty()],
    async(req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { petName, petType, description, skillOne, skillTwo, skillThree } = req.body;

        try {
            const newPet = new Pet({
                petName,
                petType,
                description,
                skillOne,
                skillTwo,
                skillThree,
                user: req.user.id
            });

            const pet = await newPet.save();
            res.json(pet);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

//update pet information
router.put('/:id', auth, async(req, res) => {
    const { petName, petType, description, skillOne, skillTwo, skillThree } = req.body;

    //build pet object
    const petFields = {};
    if(petName) petFields.petName = petName;
    if(petType) petFields.petType = petType;
    if(description) petFields.description = description;
    if(skillOne) petFields.skillOne = skillOne;
    if(skillTwo) petFields.skillTwo = skillTwo;
    if(skillThree) petFields.skillThree = skillThree;

    try {
        let pet = await Pet.findById(req.params.id);
        if(!pet) return res.status(404).json({ msg: 'Pet not found' });

        //make sure user manages pet
        if(pet.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not Authorized'});
        }

        pet = await Pet.findByIdAndUpdate(req.params.id, { $set: petFields }, { new: true });
        res.json(pet);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//delete pet
router.delete('/:id', auth, async(req, res) => {
    try {
        let pet = await Pet.findById(req.params.id);
        if(!pet) return res.status(404).json({ msg: 'Pet not found' });

        //make sure user manages pet
        if(pet.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Pet.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Pet was adopted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;