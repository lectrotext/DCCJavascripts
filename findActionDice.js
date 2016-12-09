/**
 * Finds the Action Dice for any class given its lvl 
 * @param cClass character class
 * @returns string
 */
function findActionDice(cClass, lvl) {
    var threeActions = ['Dwarf', 'Elf', 'Warrior', 'Wizard'];
    var val ='';
    if (threeActions.indexOf(cClass) == -1) {
        if (lvl < 6) {
            val = "1d20";
        } else if (lvl == 6) {
            val = "1d20 + 1d14";
        } else if (lvl == 7) {
            val = "1d20 + 1d16";
        } else {
            val = "1d20 + 1d20";
        }
    } else if (threeActions.indexOf(cClass) > -1) {
        if (lvl < 5) {
            val = "1d20";
        } else if (lvl == 5) {
            val = "1d20 + 1d14";
        } else if (lvl == 6) {
            val = "1d20 + 1d16";
        } else if (lvl < 10) {
            val = "1d20 + 1d20";
        } else {
            val = "1d20+1d20+1d14";
        }
    }
    return val;
}
