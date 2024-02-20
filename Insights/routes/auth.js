const express = require('express');
const router = express.Router();

router.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;