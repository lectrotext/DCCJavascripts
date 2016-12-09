/**
 * @param cClass character class
 * @param lvl character level
 * @param alignment character alignment
 * @returns {string}
 */
function findTitle(cClass, lvl, alignment) {
    var clericTitleList = {
        chaotic: ["Zealot", "Convert", "Cultist", "Apostle",
"High priest"],
        lawful: ["Acolyte", "Heathen-slayer", "Brother",
"Curate", "Father"],
        neutral: ["Witness", "Pupil", "Chronicler", "Judge",
"Druid"]
    };
    var elfTitleList = ["Wanderer", "Seer", "Quester", "Savant",
"Elder"];
    var dwarfTitleList = {
        chaotic: ["Rebel", "Dissident", "Exile", "Iconoclast",
"Renegade"],
        lawful: ["Agent", "Broker", "Delegate", "Envoy",
"Syndic"],
        neutral: ["Apprentice", "Novice", "Journeyer",
"Crafter", "Thegn"]
    };
    var halflingTitleList = ["Wanderer", "Explorer",
"Collector", "Accumulator"];
    var thiefTitleList = {
        chaotic: ["Thug", "Murderer", "Cutthroat",
"Executioner", "Assassin"],
        lawful: ["Bravo", "Apprentice", "Rogue", "Capo",
"Boss"],
        neutral: ["Beggar", "Cutpurse", "Burglar", "Robber",
"Swindler"]
    };
    var warriorTitleList = {
        chaotic: ["Bandit", "Brigand", "Marauder", "Ravager",
"Reaver"],
        lawful: ["Squire", "Champion", "Knight", "Cavalier",
"Paladin"],
        neutral: ["Wildling", "Barbarian", "Berserker",
"Headman/Headwoman", "Chieftain"]
    };
    var wizardTitleList = {
        chaotic: ["Cultist", "Shaman", "Diabolist",
"Warlock/Witch", "Necromancer"],
        lawful: ["Evoker", "Controller", "Conjurer", "Summoner",
"Elementalist"],
        neutral: ["Astrologist", "Enchanter", "Magician",
"Thaumaturgist", "Sorcerer"]
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
