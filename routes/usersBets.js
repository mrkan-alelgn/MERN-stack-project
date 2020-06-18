const router = require('express').Router();
let UserBets = require('../models/userBets.model');

router.route('/').get((req, res) => {
    UserBets.find()
        .then(usersBets => res.json(usersBets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const curruntBets = req.body.curruntBets;

    const newUserBets = new UserBets({ userId, curruntBets });

    newUserBets.save()
        .then(() => res.json('UserBets added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;