exports.createListingValidator = (req, res, next) => {
    req.check("title", "title is required").notEmpty()
        .isLength({ min: 3, max: 50 }).withMessage("Title should be between 3 to 50 characters")
    req.check("description", "description cannot be empty").notEmpty()
        .isLength({ min: 10, max: 200 }).withMessage("Description should be between 10 to 200 characters")
    req.check("address", "address cannot be empty").notEmpty()
        .isLength({ min: 10, max: 100 }).withMessage("address should be between 10 to 100 characters")
    req.check("price", "price cannot be empty").notEmpty()
        .isNumeric().withMessage("Price should be a number")

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}