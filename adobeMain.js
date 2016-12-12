/**
 * 1st step is to set up the charcter class that will be used:
 * At runtime we add the Character Class which contains findTitle() and 
 * findActionDice
 * By default the Specific Character class is intialized to Level 1 with
 * Chaotic alignment
 */
Dwarf.prototype = new Character();
Dwarf.prototype = new Dice();
Dwarf.prototype = new LuckySign();
var character = new Dwarf();
// This is the hook that Adobe Acrobat uses to send event
// update.  If this were to be written for
// another platform (websites, etc.), the implementation would
// be dependent on the architecture of
// that platform.
if (event.willCommit) {
    // Setting up the character object with PDF variables
    // The drop-down event value from the Level field is what
    // runs the show.
    character.lvl = event.value;
    character.cClass = this.getField("Class").value;
    character.luckySign = this.getField("LuckySign").value;
    character.alignment = this.getField("Alignment").value;
    // Setting values with functional programming.
    this.getField("Title").value = character.findTitle(character.titleList());
    this.getField("ActionDice").value = character.actionDice();
    this.getField("Attack").value = character.attack();
    this.getField("CritDie").value = character.critDice();
    this.getField("CritTable").value = character.critTable();
    // Situational updates - class based.
    if (character.isClass('Warrior')) {
        this.getField("CritRange").value = character.critRange();
    }
    if (character.isClass('Thief')) {
        this.getField("LuckDie").value = character.luckDie();
    }
}
