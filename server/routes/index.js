var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

function requireAuth(req,res, next)
{
    //to check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

/*About me page*/
router.get('/about', indexController.displayAboutPage);

/*Projects page*/
router.get('/projects', indexController.displayProjectsPage);

/*Service page */
router.get('/services', indexController.displayServicesPage);

/*Contact page*/
router.get('/contact', indexController.displayContactPage);

/* Get Route for displaying the Login Page - Read operation */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login Page - Read operation */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register Page - Read operation */
router.get('/registerbyruchit', indexController.displayRegisterPage);

/* Post Route for processing the Register Page - Read operation */
router.post('/registerbyruchit', indexController.processRegisterPage);

/* Get to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
