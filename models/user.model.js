const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    deposit: { type: Number },
    ticket: [{ matchId: { type: Schema.Types.ObjectId, ref: 'Match' }, majorRule: String, subRule: String, bitSelection: String, amount: Number }]

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;