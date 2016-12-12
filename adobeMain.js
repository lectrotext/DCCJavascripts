/**
 * 1st step is to set up the charcter class that will be used:
 * At runtime we add the Character Class which contains findTitle() and 
 * findActionDice
 * By default the Specific Character class is intialized to Level 1 with
 * Chaotic alignment
 */
Dwarf.prototype = new Character();
var character = new Dwarf();
// This is the hook that Adobe Acrobat uses to send event
// update.  If this were to be written for
// another platform (websites, etc.), the implementation would
// be dependent on the architecture of
// that platform.
if (event.willCommit) {
    // The drop-down event value from the Level field is what
    // runs the show.
    var lvl = event.value;
    // Data points needed to be able to process all the
    // functions.
    var cClass = this.getField("Class").value;
    var luckySign = this.getField("LuckySign").value;
    var alignment = this.getField("Alignment").value;
    // Fields affected by the Level changed event.
    var cTitle = this.getField("Title");
    var actionDice = this.getField("ActionDice");
    var attack = this.getField("Attack");
    var critDie = this.getField("CritDie");
    var critTable = this.getField("CritTable");
    // Setting values with functional programming.
    cTitle.value = findTitle(character.getTitles(alignment), lvl);
    actionDice.value = findActionDice(cClass, lvl);
    attack.value = character.attack(lvl);
    critDie.value = character.critDice(lvl);
    critTable.value = character.critTable(lvl);
    // Situational updates - class based.
    if (cClass == 'Warrior') {
        var critRange = this.getField("CritRange");
        critRange.value = character.critRange(lvl);
    }
    if (cClass == 'Thief') {
        var luckDie = this.getField("LuckDie");
        luckDie.value = character.luckDie(lvl);
    }

}
