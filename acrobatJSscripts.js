/*
Sheets included: Cleric, Dwarf, Elf, Halfling, Thief, Warrior & Wizard.

Auto-Fill Fields: Title, Ability Score Modifiers, Class, Action Dice, Attack, Crit Die, Crit Table.  Crit Threat Range for Warrior. Luck Die for Thief.
Drop-downs: Level, Ability Scores, Alignment. Spell Level on the Elf and Wizard.
Character Portrait: Upload image file functionality 

Totally free! 

Tips welcome.

*/
// @todo figure out a build script that will only create a file for each class.

/**
 * generates a dice chain for any given scenario.  without arguments 1d3-1d30 is returned as an array
 * of strings.
 * @param to int
 * @param from int
 * @param add1d bool
 * @returns {Array}
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

/**
 * @param cClass character class
 * @param lvl character level
 * @param alignment character alignment
 * @returns {string}
 */
function findTitle(cClass, lvl, alignment) {
    var clericTitleList = {
        chaotic: ["Zealot", "Convert", "Cultist", "Apostle", "High priest"],
        lawful: ["Acolyte", "Heathen-slayer", "Brother", "Curate", "Father"],
        neutral: ["Witness", "Pupil", "Chronicler", "Judge", "Druid"]
    };
    var elfTitleList = ["Wanderer", "Seer", "Quester", "Savant", "Elder"];
    var dwarfTitleList = {
        chaotic: ["Rebel", "Dissident", "Exile", "Iconoclast", "Renegade"],
        lawful: ["Agent", "Broker", "Delegate", "Envoy", "Syndic"],
        neutral: ["Apprentice", "Novice", "Journeyer", "Crafter", "Thegn"]
    };
    var halflingTitleList = ["Wanderer", "Explorer", "Collector", "Accumulator"];
    var thiefTitleList = {
        chaotic: ["Thug", "Murderer", "Cutthroat", "Executioner", "Assassin"],
        lawful: ["Bravo", "Apprentice", "Rogue", "Capo", "Boss"],
        neutral: ["Beggar", "Cutpurse", "Burglar", "Robber", "Swindler"]
    };
    var warriorTitleList = {
        chaotic: ["Bandit", "Brigand", "Marauder", "Ravager", "Reaver"],
        lawful: ["Squire", "Champion", "Knight", "Cavalier", "Paladin"],
        neutral: ["Wildling", "Barbarian", "Berserker", "Headman/Headwoman", "Chieftain"]
    };
    var wizardTitleList = {
        chaotic: ["Cultist", "Shaman", "Diabolist", "Warlock/Witch", "Necromancer"],
        lawful: ["Evoker", "Controller", "Conjurer", "Summoner", "Elementalist"],
        neutral: ["Astrologist", "Enchanter", "Magician", "Thaumaturgist", "Sorcerer"]
    };
    var titles = [];
    var titleList = [];
    switch (cClass) {
        case 'Cleric':
            titleList = clericTitleList;
            break;
        case 'Elf':
            titles = elfTitleList;
            break;
        case 'Dwarf':
            titleList = dwarfTitleList;
            break;
        case 'Halfling':
            titles = halflingTitleList;
            break;
        case 'Thief':
            titleList = thiefTitleList;
            break;
        case 'Warrior':
            titleList = warriorTitleList;
            break;
        case 'Wizard':
            titleList = wizardTitleList;
            break;
        default:
            titleList = [];
    }

    if (cClass != 'Elf' && cClass != 'Halfling') {
        if (alignment == 'Chaotic') {
            titles = titleList.chaotic;
        } else if (alignment == 'Lawful') {
            titles = titleList.lawful;
        } else {
            titles = titleList.neutral;
        }
    }

    var val = '';
    if (lvl >=5) {
        val = titles[4];
    } else if (lvl < 5) {
        val = titles[lvl-1];
    }
    return val;
}

/**
 *
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

/**
 *
 * @param cClass character class
 * @param lvl character lvl
 * @returns {string}
 */
function findCritDice(cClass, lvl) {
    // buliding the dice chains
    var genericCrit = createDiceChain(8,16, false);
    var wizCrit = createDiceChain(8,14,false);
    var dwarfCrit = createDiceChain(10);
    var warriorCrit = createDiceChain(12);
    var thiefCrit = dwarfCrit;
    // Adding the last step as I don't think that's a responsibility of the diceChain factory
    wizCrit.splice(0,0,6);
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
                val = "1d" + genericCrit[Math.floor((lvl - 2) / 2)];
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
    } else {
        val = lvl - 1;
        if (lvl >= 4) { val -= 1; }
        if (lvl >= 8) { val -= 1; }
    }
    return val;
}

/**
 *
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

/**
 *
 * @param lvl
 * @returns {string}
 */
function findLuckDie(lvl) {
    var diceChain = createDiceChain(3,16);
    return diceChain[lvl - 1];
}

/**
 *
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

// This is the hook that Adobe Acrobat uses to send event update.  If this were to be written for
// another platform (websites, etc.), the implementation would be dependent on the architecture of
// that platform.
if (event.willCommit) {
    // The drop-down event value from the Level field is what runs the show.
    var lvl = event.value;
    // Data points needed to be able to process all the functions.
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
