/**
 *
 * @param cClass character class
 * @param lvl character lvl
 * @returns {string}
 */
function findCritDice(cClass, lvl) {
    // buliding the dice chains
    var genericCrit = createDiceChain(8,16, false);
    var wizCrit = createDiceChain(7,14,false); //hack because d7
appears before d6; replaced below
    var dwarfCrit = createDiceChain(10);
    var warriorCrit = createDiceChain(12);
    var thiefCrit = dwarfCrit;
    // Adding the last steps as I don't think that's a
    // responsibility of the diceChain factory
    wizCrit[0] = 6;
    dwarfCrit.push("2d20");
    warriorCrit.push("2d20");

    var val = '';

    if (cClass == 'Cleric' || cClass == 'Halfling') {
        val = "1d" + genericCrit[Math.floor((lvl - 1) / 2)];
    } else {
        if (cClass == 'Elf') {
            if (lvl == 1) {
                val = "1d6";
            } else {
                val = "1d" + genericCrit[Math.floor((lvl - 2) /
2)];
            }
        }
        if (cClass == 'Wizard') {
            val = "1d" + wizCrit[Math.floor((lvl - 1) / 2)];
        }
        if (cClass == 'Dwarf') {
            if (lvl < 7) {
                val = dwarfCrit[lvl - 1];
            } else {
                if (lvl < 9) {
                    val = dwarfCrit[6];
                } else {
                    val = dwarfCrit[7];
                }
            }
        }
        if (cClass == 'Warrior') {
            if (lvl < 6) {
                val = warriorCrit[lvl - 1];
            } else {
                if (lvl < 8) {
                    val = warriorCrit[5];
                } else {
                    val = warriorCrit[6];
                }
            }
        }
        if (cClass == 'Thief') {
            if (lvl < 8) {
                val = thiefCrit[lvl - 1];
            } else {
                var plus = (Number(lvl) - 7) * 2;
                val = thiefCrit[6] + "+" + plus;
            }
        }
    }
    return val;
}
