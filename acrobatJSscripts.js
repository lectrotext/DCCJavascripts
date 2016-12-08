/*
Sheets included: Cleric, Dwarf, Elf, Halfling, Thief, Warrior & Wizard.

Auto-Fill Fields: Title, Ability Score Modifiers, Class, Action Dice, Attack, Crit Die, Crit Table.  Crit Threat Range for Warrior. Luck Die for Thief.
Drop-downs: Level, Ability Scores, Alignment. Spell Level on the Elf and Wizard.
Character Portrait: Upload image file functionality 

Totally free! 

Tips welcome.

*/
function createDiceChain(to, from, add1d) {
    // Default parameter values
    to = typeof to !== 'undefined' ? to : 3;
    from = typeof from !== 'undefined' ? from : 30;
    add1d = typeof add1d !== 'undefined' ? add1d : true;
    // Setting up variables
    var values = [3,4,5,6,7,8,10,12,14,16,20,24,30];
    var diceChain = [];
    function addString1d(item) {
      return "1d" + item;
    }
    // creating return
    if (values.indexOf(to) != -1 && values.indexOf(from) != -1) {
      diceChain = values.slice(values.indexOf(to), values.indexOf(from)+1);
    }
    if (add1d) {
      diceChain = diceChain.map(addString1d);
    }
    // return diceChain
    return diceChain;
}


if (event.willCommit) {
  var lvl = event.value;
  var cTitle = this.getField("Title");
  var alignment = this.getField("Alignment").value;
  
//=-----= TITLE =-----=
  var titlesList = {
    chaotic: [
      "Zealot",
      "Convert",
      "Cultist",
      "Apostle",
      "High priest"
    ],
    lawful: [
      "Acolyte",
      "Heathen-slayer",
      "Brother",
      "Curate",
      "Father"
    ],
    neutral: [
      "Witness",
      "Pupil",
      "Chronicler",
      "Judge",
      "Druid"
    ]
  };

  if (alignment == 'Chaotic') {
    titles = titlesList.chaotic;
  } else if (alignment == 'Lawful') {
    titles = titlesList.lawful;
  } else {
    titles = titlesList.neutral;
  }
  if (lvl >=5) {
    cTitle.value = titles[4];
  } else if (lvl < 5) {
    cTitle.value = titles[lvl-1];
  }
  
//=-----= ACTION DICE =-----=
  // Cleric, Elf, Halfling, Thief use this action dice progression.
  var actionDice = this.getField("ActionDice");
  if (lvl < 6) {
    actionDice.value = "1d20";
  } else if (lvl == 6) {
    actionDice.value = "1d20 + 1d14";
  } else if (lvl == 7) {
    actionDice.value = "1d20 + 1d16";
  } else {
    actionDice.value = "1d20 + 1d20";
  }
  // Dwarf, Elf, Warrior & Wizard
  var actionDice = this.getField("ActionDice");
  if (lvl < 5) {
    actionDice.value = "1d20";
  } else if (lvl == 5) {
    actionDice.value = "1d20 + 1d14";
  } else if (lvl == 6) {
    actionDice.value = "1d20 + 1d16";
  } else if (lvl < 10){
    actionDice.value = "1d20 + 1d20";
  } else {
    actionDice.value = "1d20+1d20+1d14";
  }

//=-----= CRIT DIE =-----=
  // Thief, Cleric, Halfling, Wizard and Elf use this progression.
  // Wizard starts with a d6 in the array 
  var critDie = this.getField("CritDie");
  var critDice = [8,10,12,14,16];
  var wizCrit = [6,8,10,12,14];
  critDie.value = "1d" + critDice[Math.floor((lvl-1)/2)];
  
  // Elf
  var critDie = this.getField("CritDie");
  var critDice = [8,10,12,14,16];
  if (lvl == 1) {
    critDie.value = "1d6";
  } else {
    critDie.value = "1d" + critDice[Math.floor((lvl-2)/2)];
  }
  
  // Dwarf & Fighter
  // Fighter removes 1d10 from the list and lower the starting tier by one level (6 & 8).
  var critDie = this.getField("CritDie");
  var diceChain = ["1d10","1d12","1d14","1d16","1d20","1d24","1d30","2d20"];
  if (lvl < 7) {
    critDie.value = diceChain[lvl-1];
  } else {
    if (lvl < 9) {
      critDie.value = diceChain[6];
    } else {
      critDie.value = diceChain[7];
    }
  }

//=------= ATTACK =------= 
  // Thief, Cleric Progression.  
  // Halflings are based off this too. val starts at lvl. Decrements occur at lvl 3 & 7.
  var attack = this.getField("Attack");
  var val = lvl - 1;
  if (lvl >= 4) { val -= 1; }
  if (lvl >= 8) { val -= 1; }
  attack.value = val;
  
  // Wizard
  var attack = this.getField("Attack");  
  var val = 1;
  if (lvl >= 5) { val = 2; }
  if (lvl >= 7) { val = 3; }
  if (lvl >= 9) { val = 4; }
  attack.value = val;
  
  // Elf
  var attack = this.getField("Attack");
  attack.value = Math.ceil(lvl/2);
  
  // Fighter & Dwarf
  var attack = this.getField("Attack");
  var diceChain = ["1d3","1d4","1d5","1d6","1d7","1d8","1d10"];
  if (lvl < 7) {
    attack.value = diceChain[lvl-1];
  } else {
    var plus = Number(lvl) - 6;
    attack.value = diceChain[6] + "+" + plus;
  }
  
//=-----= CRIT TABLE =-----=  
  // Crit Table Dwarves.
  // Warriors tiers start 1 lvl lower (3 & 5)
  var critTable = this.getField("CritTable");
  if (lvl < 4) {
    critTable.value = "III";
  } else if (lvl < 6) {
    critTable.value = "IV";
  } else {
    critTable.value = "V";
  }  
}
