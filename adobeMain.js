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
    // Setting values with functional programming.
    cTitle.value = findTitle(cClass, lvl, alignment);
    actionDice.value = findActionDice(cClass, lvl);
    attack.value = findAttack(cClass, lvl);
    critDie.value = findCritDice(cClass, lvl);
    // Situational updates - class based.
    if (cClass == 'Dwarf' || cClass == 'Warrior') {
        var critTable = this.getField("CritTable");
        critTable.value = findCritTable(cClass, lvl);
    }
    if (cClass == 'Warrior') {
        var critRange = this.getField("CritRange");
        critRange.value = findCritRange(lvl);
    }
    if (cClass == 'Thief') {
        var luckDie = this.getField("LuckDie");
        luckDie.value = findLuckDie(lvl);
    }

}
