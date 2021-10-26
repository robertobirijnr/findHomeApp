const Houses = require('../models/House')


exports.createHouse = (req, res) => {
    const house = new Houses(req.body)

    house.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data)
    })
}

exports.getAllListings = (req, res) => {
    Houses.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data);
    });
}

exports.getById = (req, res) => {
    const id = req.params.id;

    Houses.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(data);
    });
}

exports.updateListing = (req, res) => {
    const listingId = req.params.id
    Houses.findById(listingId).then(listing => {
        listing.title = req.body.title,
            listing.description = req.body.description,
            listing.address = req.body.address,
            listing.homeType = req.body.homeType,
            listing.price = req.body.price,
            listing.image = req.body.image,
            listing.yearBuilt = req.body.yearBuilt

        return listing.save()
    })
        .then(results => {
            res.send(results)
        })
        .catch(err => console.log(err))
}

exports.deleteListing = (req, res) => {
    const listingId = req.params.id

    Houses.findByIdAndRemove(listingId).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json({
            message: "listing deleted successfully"
        });
    });
}