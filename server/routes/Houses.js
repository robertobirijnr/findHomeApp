const express = require('express');
const { createHouse, getAllListings, getById, updateListing, deleteListing } = require('../controllers/Houses');
const { createListingValidator } = require('../middleware');
const router = express.Router()


router.get('/', getAllListings)
router.get("/:id", getById)
router.post('/create', createListingValidator, createHouse)
router.put('/:id', createListingValidator, updateListing)
router.delete('/:id', deleteListing)



module.exports = router;