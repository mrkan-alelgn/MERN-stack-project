const mongoose = require('mongoose');
// let Match = require('match.model');
// let User = require('user.model');

const Schema = mongoose.Schema;

const userBetsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    curruntBets: [{ matchId: { type: Schema.Types.ObjectId, ref: 'Match' }, rule: String, amount: Number }]
}, {
    timestamps: true,
});

const UserBets = mongoose.model('UserBets', userBetsSchema);

module.exports = UserBets;