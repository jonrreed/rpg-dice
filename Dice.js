function Dice() {

}

/**
 * Rolls "dice" with a given number of sides, number of dice rolled, with a modifier
 * default behavior with no arguments passed is to roll a single d20
 * defaut number of dice rolled is 1, default modifier is 0
 * 
 * Retuns an integer value, or a message if a NaN is passed as an argument
 */
Dice.rollDice = function (dieSides = 20, diceRolled = 1, modifier = 0) {
    //if any argument is NaN, return text message
    if (isNaN(dieSides) || isNaN(diceRolled) || isNaN(modifier)) {
        return "Hey pal, just numbers alright?";
    }
    //make sure dieSides and diceRolled are not negative -- negative modifiers are fine
    dieSides = removeNegatives(dieSides);
    diceRolled = removeNegatives(diceRolled);
    //drop any trailing decimal values to modifier
    modifier = Math.floor(modifier);
    //otherwise roll the dice
    var rollResult = 0;
    //if fewer than two dice are to be rolled
    if (diceRolled < 2) {
        rollResult = rollDie(dieSides);
    }
    //if more than one die is to be rolled
    else {
        for (currentRoll = 0; currentRoll < diceRolled; currentRoll++) {
            rollResult += rollDie(dieSides);
        }
    }
    //apply modifier
    rollResult += modifier;

    //finally returns the result
    return rollResult;

    //nested function to roll a single die
    function rollDie(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }
    /*nested function to prevent negative numbers for die sides and number of dice
    also removes trailing decimal values */
    function removeNegatives(numToCheck) {
        if (numToCheck < 0) {
            numToCheck *= -1;
        }
        return Math.floor(numToCheck);
    }
}

/**
 * Convenience functions for rolling common dice - number of rolls and modifier optional
 */

Dice.d4 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(4, rolls, modifier);
}

Dice.d6 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(6, rolls, modifier);
}

Dice.d8 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(8, rolls, modifier);
}

Dice.d10 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(10, rolls, modifier);
}

Dice.d12 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(12, rolls, modifier);
}

Dice.d20 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(20, rolls, modifier);
}

Dice.d100 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(100, rolls, modifier);
}

/**
 * Slightly less common rolls but still "common"
 */

Dice.d2 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(2, rolls, modifier);
}

Dice.d3 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(3, rolls, modifier);
}

Dice.d30 = function (rolls = 1, modifier = 0) {
    return Dice.rollDice(30, rolls, modifier);
}