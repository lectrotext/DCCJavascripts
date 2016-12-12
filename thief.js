function Thief(lvl, alignment) {
    this.cClass = "Thief";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.alignment = typeof alignment !== 'undefined' ? alignment : "Chaotic";
    this.speed = 30;
    this.saves = {
        ref: [1,1,2,2,3,4,4,5,5,6],
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [0,0,1,1,1,2,2,2,3,3] 
    };
    this.titles = {
        chaotic: ["Thug", "Murderer", "Cutthroat", "Executioner", "Assassin"],
        lawful: ["Bravo", "Apprentice", "Rogue", "Capo", "Boss"],
        neutral: ["Beggar", "Cutpurse", "Burglar", "Robber", "Swindler"]    
    };
    this.skills = {
        backstab: {
            chaotic: [3,5,7,8,9,11,12,13,14,15],
            lawful: [1,3,5,7,8,9,10,11,12,13],
            neutral: [0,1,2,3,4,5,6,7,8,9]
        },
        sneak: {
            chaotic: [3,5,7,8,9,11,12,13,14,15],
            lawful: [1,3,5,7,8,9,10,11,12,13],
            neutral: [3,5,7,8,9,11,12,13,14,15]
        },
        hide: {
            chaotic: [1,3,5,7,8,9,10,11,12,13],
            lawful: [3,5,7,8,9,11,12,13,14,15],
            neutral: [1,3,5,7,8,9,10,11,12,13]
        },
        pickPocket: {
            chaotic: [0,1,2,3,4,5,6,7,8,9],
            lawful: [1,3,5,7,8,9,10,11,12,13],
            neutral: [3,5,7,8,9,11,12,13,14,15]
        },
        climb: {
            chaotic: [1,3,5,7,8,9,10,11,12,13],
            lawful: [3,5,7,8,9,11,12,13,14,15],
            neutral: [3,5,7,8,9,11,12,13,14,15]
        },
        pickLock: {
            chaotic: [1,3,5,7,8,9,10,11,12,13],
            lawful: [1,3,5,7,8,9,10,11,12,13],
            neutral: [1,3,5,7,8,9,10,11,12,13]
        },
        findTrap: {
            chaotic: [1,3,5,7,8,9,10,11,12,13],
            lawful: [3,5,7,8,9,11,12,13,14,15],
            neutral: [1,3,5,7,8,9,10,11,12,13]
        },
        DisableTrap: {
            chaotic: [0,1,2,3,4,5,6,7,8,9],
            lawful: [3,5,7,8,9,11,12,13,14,15],
            neutral: [1,3,5,7,8,9,10,11,12,13]
        },
        forgeDoc: {
            chaotic: [0,0,1,2,3,4,5,6,7,8],
            lawful: [0,0,1,2,3,4,5,6,7,8],
            neutral: [3,5,7,8,9,11,12,13,14,15]
        },
        disguiseSelf: {
            chaotic: [3,5,7,8,9,11,12,13,14,15],
            lawful: [0,1,2,3,4,5,6,7,8,9],
            neutral: [0,0,1,2,3,4,5,6,7,8]
        },
        readLanguages: {
            chaotic: [0,0,1,2,3,4,5,6,7,8],
            lawful: [0,0,1,2,3,4,5,6,7,8],
            neutral: [0,1,2,3,4,5,6,7,8,9]
        },
        handlePoison: {
            chaotic: [3,5,7,8,9,11,12,13,14,15],
            lawful: [0,1,2,3,4,5,6,7,8,9],
            neutral: [0,0,1,2,3,4,5,6,7,8]
        },
        castFromScroll: {
            chaotic: ["d10","d10","d12","d12","14","d14","d16","d16","d20","d20"],
            lawful: ["d10","d10","d12","d12","14","d14","d16","d16","d20","d20"],
            neutral: ["d12","d12","14","d14","d16","d16","d20","d20","d20","d20"]
        }
    };
    this.critDice = function() {
        var crit = createDiceChain(10);
        var val = '';
        if (this.lvl < 8) {
            val = crit[this.lvl - 1];
        } else {
            var plus = (Number(this.lvl) - 7) * 2;
            val = crit[6] + "+" + plus;
        }
        return val;
    };
    this.critTable = function() {
        return "II";
    };
    this.titleList = function() {
        var titleList = [];
        if (this.alignment == 'Chaotic') {
            titleList = this.titles.chaotic;
        } else if (this.alignment == 'Lawful') {
            titleList = this.titles.lawful;
        } else if (this.alignment == 'Neutral') {
            titleList = this.titles.neutral;
        }
        return titleList;
    };
    this.attack = function() {
        var val = this.lvl -1;
        if (this.lvl >= 4) { val -= 1; }
        if (this.lvl >= 8) { val -= 1; }
        return val;
    };
    this.luckDie = function() {
        var diceChain = createDiceChain(3,16);
        return diceChain[this.lvl - 1];
    };
}
