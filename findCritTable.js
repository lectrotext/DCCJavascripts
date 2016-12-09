/**
 * Finds the Critical Table for Dwarves and Warriors
 * @param cClass
 * @param lvl
 * @returns {string}
 */
function findCritTable(cClass, lvl) {
    var tableThree = 3;
    var tableFour = 5;
    var val = '';

    if (cClass == 'Dwarf') {
        tableThree++;tableFour++;
    }

    if (lvl < tableThree) {
        val = "III";
    } else if (lvl < tableFour) {
        val = "IV";
    } else {
        val = "V";
    }
    return val;
}
