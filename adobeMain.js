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
