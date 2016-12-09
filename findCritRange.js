/**
 * Finds the Critcal Threat Range for a Warrior given his level
 * @param lvl
 * @returns {string}
 */
function findCritRange(lvl) {
    var val = '';
    if (lvl < 5) {
        val = "19-20";
    } else if (lvl < 9) {
        val = "18-20";
    } else {
        val = "17-20";
    }
    return val;
}
