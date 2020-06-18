const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    matchName: { type: String, required: true },
    startTime: { type: String },
    odd: {
        majorRule: {
            main: {
                matchResult: {
                    1: { type: Number }, X: { type: Number }, 2: { type: Number }
                },
                doubleChance: {
                    oneX: { type: Number }, 12: { type: Number }, Xtwo: { type: Number }
                },
                bothTeamToScore: {
                    yes: { type: Number }, no: { type: Number },
                },
                correctScore: {
                    oneToZero: { type: Number }, twoToZero: { type: Number },
                    twoToOne: { type: Number }, threeToZero: { type: Number },
                    threeToOne: { type: Number }, threeToTwo: { type: Number },
                    fourToZero: { type: Number }, fourToOne: { type: Number },
                    fourToTwo: { type: Number }, fourToThree: { type: Number },
                    zeroToZero: { type: Number }, oneToOne: { type: Number },
                    twoToTwo: { type: Number }, threeToThree: { type: Number },
                    fourToFOur: { type: Number }, zeroToOne: { type: Number },
                    zeroToTwo: { type: Number }, zeroToThree: { type: Number },
                    zeroToFour: { type: Number }, zeroToFive: { type: Number },
                    oneToTwo: { type: Number }, oneToThree: { type: Number },
                    oneToFour: { type: Number }, oneToFive: { type: Number },
                    twoToThree: { type: Number }, twoToFour: { type: Number },
                    twoToFive: { type: Number }, threeToFour: { type: Number },
                },
                halfTimeFullTime: {
                    oneOverOne: { type: Number }, oneOverX: { type: Number },
                    oneOverTwo: { type: Number }, xOverOne: { type: Number },
                    xOverX: { type: Number }, xOverTwo: { type: Number },
                    twoOverOne: { type: Number }, twoOverX: { type: Number },
                    twoOverTwo: { type: Number }
                },
                oddOrEven: { odd: { type: Number }, even: { type: Number } },
                highestScoringHalf: {
                    firstHalf: { type: Number }, X: { type: Number },
                    secondHalf: { type: Number }
                },
                whichTeamScoreTheFirstGoal: {
                    1: { type: Number }, noFirst: { type: Number },
                    2: { type: Number }
                },
                whichTeamScoreTheSecondGoal: {
                    1: { type: Number }, noFirst: { type: Number },
                    2: { type: Number }
                },
                whichTeamScoreTheThirdGoal: {
                    1: { type: Number }, noFirst: { type: Number },
                    2: { type: Number }
                },
                whichTeamScoreTheFourthGoal: {
                    1: { type: Number }, noFirst: { type: Number },
                    2: { type: Number }
                },
                whichTeamScoreTheFifthGoal: {
                    1: { type: Number }, noFirst: { type: Number },
                    2: { type: Number }
                },
                homeHighestScoringHalf: {
                    firstHalf: { type: Number }, X: { type: Number },
                    secondHalf: { type: Number }
                },
                awayHighestScoringHalf: {
                    firstHalf: { type: Number }, X: { type: Number },
                    secondHalf: { type: Number }
                },
            },
            goals: {
                overAndUnder: {
                    overZeropoinFive: { type: Number }, underZeroPoinFive: { type: Number },
                    overOnePoinFive: { type: Number }, underOnepoinFive: { type: Number },
                    overTwoPoinFive: { type: Number }, underTwoPoinFive: { type: Number },
                    overThreePoinFive: { type: Number }, underThreepoinFive: { type: Number },
                    overFourpoinFive: { type: Number }, underFourpoinFive: { type: Number },
                },
                homeTeamTotalGoals: {
                    overZeropoinFive: { type: Number }, underZeroPoinFive: { type: Number },
                    overOnePoinFive: { type: Number }, underOnepoinFive: { type: Number },
                    overTwoPoinFive: { type: Number }, underTwoPoinFive: { type: Number },
                },
                awayTeamTotalGoals: {
                    overZeropoinFive: { type: Number }, underZeroPoinFive: { type: Number },
                    overOnePoinFive: { type: Number }, underOnepoinFive: { type: Number },
                    overTwoPoinFive: { type: Number }, underTwoPoinFive: { type: Number },
                },
                homeTeamScoreAGoal: { Yes: { type: Number }, no: { type: Number }, },
                awayTeamScoreAGoal: { Yes: { type: Number }, no: { type: Number }, },
                zeroOrOneGoals: { Yes: { type: Number }, no: { type: Number } },
                oneOrTwoGoals: { Yes: { type: Number }, no: { type: Number } },
                twoOrThreeGoals: { Yes: { type: Number }, no: { type: Number } },
                threeOrFourGoals: { Yes: { type: Number }, no: { type: Number } },
                fourOrFiveGoals: { Yes: { type: Number }, no: { type: Number } },
                home0Or1Goals: { Yes: { type: Number }, no: { type: Number } },
                home1Or2Goals: { Yes: { type: Number }, no: { type: Number } },
                home3Or4Goals: { Yes: { type: Number }, no: { type: Number } },
                home4Or5Goals: { Yes: { type: Number }, no: { type: Number } },
                away0Or1Goals: { Yes: { type: Number }, no: { type: Number } },
                away1Or2Goals: { Yes: { type: Number }, no: { type: Number } },
                away3Or4Goals: { Yes: { type: Number }, no: { type: Number } },
                away4Or5Goals: { Yes: { type: Number }, no: { type: Number } },
                totalGoalsNumber: {
                    0: { type: Number }, 1: { type: Number },
                    2: { type: Number }, 3: { type: Number },
                    4: { type: Number }, 5: { type: Number },

                    more2: { type: Number }, more3: { type: Number },

                    more4: { type: Number }, more5: { type: Number },

                    more6: { type: Number }, more7: { type: Number },

                },
                homeTotalGoalsNumber: {
                    0: { type: Number }, 1: { type: Number },
                    2: { type: Number }, more2: { type: Number },
                    more3: { type: Number }, more4: { type: Number },
                },
                awayTotalGoalsNumber: {
                    0: { type: Number }, 1: { type: Number },
                    2: { type: Number }, 3: { type: Number },
                    4: { type: Number }, 5: { type: Number }
                },
                oneToThree: {
                    yes: { type: Number }, no: { type: Number }
                },
                twoToFour: {
                    yes: { type: Number }, no: { type: Number }
                },
                twoToFive: {
                    yes: { type: Number }, no: { type: Number }
                },
                twoToSix: {
                    yes: { type: Number }, no: { type: Number }
                },
                threeToFive: {
                    yes: { type: Number }, no: { type: Number }
                },
                fourToSix: {
                    yes: { type: Number }, no: { type: Number }
                },


            },
            doubleBets: {
                resultOrBothTeamToScore:
                {
                    oneOrYes: { type: Number }, xOrYes: { type: Number },
                    twoOrYes: { type: Number }, oneOrNo: { type: Number },
                    xOrNo: { type: Number }, twoOrNo: { type: Number }
                },

                homeWinOrOver:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                homeWinOrUnder:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                awayWinOrOver:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                awayWinOrUnder:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                doubleChanceOrTotalGoals:
                {
                    oneXOrzero: { type: Number }, oneXOrU: { type: Number },
                    x2OrO: { type: Number }, x2OrU: { type: Number },
                    oneTowOrZero: { type: Number }, oneTowOrU: { type: Number },
                },
                homeScoreFirstOrWinMatch:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                homeScoreFirstOrNotWinMatch:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                awayScoreFirstOrWinMatch:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                awayScoreFirstOrNotWinMatch:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                oneXOrOver:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                oneXOrUnder:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                XtwoOrOver:
                {
                    yes: { type: Number }, no: { type: Number },

                },
                XtwoOrUnder:
                {
                    yes: { type: Number }, no: { type: Number },

                },
            }
        }
    }
},
    {
        timestamps: true,
    });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;