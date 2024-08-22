const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
    // res.status(200).json({ message: 'get contact' });
});

//@desc Create new contacts
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is:", req.body);
    const { name, email, phone, type } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    // res.status(201).json({ message: 'Create contact' });
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    res.status(200).json(contact);
    // res.status(200).json({ message: `Get contact with id ${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact not found');
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    try {
        console.log(`Received DELETE request for contact ID: ${req.params.id}`);
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404);
            throw new Error('Contact not found');
        }

        await Contact.findByIdAndDelete(req.params.id);
        // res.status(200).json(contact);
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error(`Error deleting contact: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
});
module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };