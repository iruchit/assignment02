const { request } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our contact model
let Contact = require('../models/contact');

// helper function for gaurd purpose
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contact');

/* Get Route for the Contact List Page - Read operation */
router.get('/', requireAuth, contactController.displayContactList);

/* Get Route for displaying the Add Page - Create operation */
router.get('/add', requireAuth, contactController.displayAddPage);

/* Post Route for processing the Add Page - Create operation */
router.post('/add', requireAuth, contactController.processAddPage);

/* Get Route for displaying the Edit Page - Update operation */
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* Post Route for processing the Edit Page - Update operation */
router.post('/edit/:id', requireAuth, contactController.processEditPage);

/* Get to perform Deletion - Delete operation */
router.get('/delete/:id',requireAuth, contactController.performDelete);

module.exports = router;