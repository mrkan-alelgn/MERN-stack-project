const router = require('express').Router();
let Match = require('../models/match.model');

//this route fetch all matches from the database
router.route('/').get((req, res) => {
    console.log("something");
    Match.find()
        .then(matches => res.json(matches))
        .catch(err => res.status(400).json('Error: ' + err));
});

//this route add matches to database
router.route('/add').post((req, res) => {
    const matchName = req.body.matchName;
    const startTime = req.body.startTime;
    const odd = req.body.odd;

    const newMatch = new Match({ matchName, startTime, odd });
    console
    newMatch.save()
        .then(() => res.json('Match added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;