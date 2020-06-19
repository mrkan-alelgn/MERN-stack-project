const router = require('express').Router();
let User = require('../models/user.model');
let Match = require('../models/match.model');

//These route fetch all users from the databse and return to client
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//These route fetch all the matches and their details that the user bet on (Ticket)
//it also help us to calculate deposit for a user
router.route('/:userId/getTicket').get((req, res) => {

    User.findById(req.params.userId)
        .then(users => {
            var array = users.ticket;
            var deposit = users.deposit;
            var ticket = [deposit];

            // A Promise function that takes matchID as argument and return matchname from match collection
            var myPromise = (matchId) => {
                //matchName = "";
                return new Promise((resolve, reject) => {
                    Match.findById(matchId)
                        .then((match) => {
                            resolve(match.matchName);
                        })
                });
            }

            // This function return odd for the match at certain rule
            var myPromise2 = (matchId, majorRule, subRule, bitSelection) => {
                //var matchOdd =match.odds.+oddOption} + "." + { rule };
                return new Promise((resolve, reject) => {

                    Match.findById(matchId)
                        .then((match) => {
                            resolve(match.odd.majorRule[majorRule][subRule][bitSelection]);
                        })
                });
            }

            //these function change matchId into matchName and put matchName,  by what rule and amount of money the 
            async function arrayElements() {
                // array.forEach(element => {
                for (element of array) {
                    console.log(element)
                    console.log(element.matchId)
                    matchName = await myPromise(element.matchId)
                    matchOdd = await myPromise2(element.matchId, element.majorRule, element.subRule, element.bitSelection)
                    //console.log(matchOdd)
                    //console.log(matchName)
                    ticket.push({ matchName: matchName, odd: matchOdd, bitSelection: element.bitSelection, amount: element.amount })
                    // console.log(newArray)
                }
                console.log(ticket)
                res.json(ticket)
            }
            arrayElements();
            // res.json(array);




        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//these route add user to the database like for registering users
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const deposit = Number(req.body.deposit);
    const ticket = req.body.ticket;

    const newUser = new User({ username, phoneNumber, deposit, password, ticket });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//This route add users currunt stack and store in users ticket
router.route('/addToTicket/:id').post((req, res) => {
    const username = req.body.username;
    const id = req.params.id;
    const ticket = req.body.ticket;
    console.log(username)

    User.findOneAndUpdate({ _id: id }, { $push: { ticket: ticket } }, { new: true })
        .then(() => res.json('User Tickets added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});




module.exports = router;