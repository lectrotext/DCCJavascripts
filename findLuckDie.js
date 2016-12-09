/**
 * Finds the Luck Die for a Thief given his level
 * @param lvl
 * @returns {string}
 */
function findLuckDie(lvl) {
    var diceChain = createDiceChain(3,16);
    return diceChain[lvl - 1];
}
