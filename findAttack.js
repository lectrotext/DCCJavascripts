/**
 *
 * @param cClass
 * @param lvl
 */
function findAttack(cClass, lvl) {
    var val = 0;
    var diceChain = createDiceChain(3,10);

    if (cClass == 'Wizard') {
        if (lvl > 1) {
            val = 1;
        }
        if (lvl >= 5) {
            val = 2;
        }
        if (lvl >= 7) {
            val = 3;
        }
        if (lvl >= 9) {
            val = 4;
        }
    } else if (cClass == 'Elf') {
        val = Math.ceil(lvl/2);
    } else if (cClass == 'Warrior' || cClass == 'Dwarf') {
        if (lvl < 7) {
            val = diceChain[lvl-1];
        } else {
            var plus = Number(lvl) - 6;
            val = diceChain[6] + "+" + plus;
        }
    } else if (cClass == 'Halfling') {
        val = lvl;
        if (lvl >= 3) { val -= 1; }
        if (lvl >= 7) { val -= 1; }
    } else {
        val = lvl -1;
        if (lvl >= 4) { val -= 1; }
        if (lvl >= 8) { val -= 1; }
    }
    return val;
}
