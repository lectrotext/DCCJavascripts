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
        chaotic:{
            backstab: [3,5,7,8,9,11,12,13,14,15],
            sneak: [3,5,7,8,9,11,12,13,14,15],
            hide: [1,3,5,7,8,9,10,11,12,13],
            pickPocket: [0,1,2,3,4,5,6,7,8,9],
            climb: [1,3,5,7,8,9,10,11,12,13],
            pickLock: [1,3,5,7,8,9,10,11,12,13],
            findTrap: [1,3,5,7,8,9,10,11,12,13],
            disableTrap:[0,1,2,3,4,5,6,7,8,9],
            forgery: [0,0,1,2,3,4,5,6,7,8],
            disguise: [3,5,7,8,9,11,12,13,14,15],
            readLanguages: [0,0,1,2,3,4,5,6,7,8],
            handlePoison: [3,5,7,8,9,11,12,13,14,15],
            castFromScroll: ["d10","d10","d12","d12","14","d14","d16","d16","d20","d20"]
        },
        lawful:{
            backstab: [1,3,5,7,8,9,10,11,12,13],
            sneak: [1,3,5,7,8,9,10,11,12,13],
            hide: [3,5,7,8,9,11,12,13,14,15],
            pickPocket: [1,3,5,7,8,9,10,11,12,13],
            climb: [3,5,7,8,9,11,12,13,14,15],
            pickLock: [1,3,5,7,8,9,10,11,12,13],
            findTrap: [3,5,7,8,9,11,12,13,14,15],
            disableTrap: [3,5,7,8,9,11,12,13,14,15],
            forgery: [0,0,1,2,3,4,5,6,7,8],
            disguise: [0,1,2,3,4,5,6,7,8,9],
            readLanguages: [0,0,1,2,3,4,5,6,7,8],
            handlePoison: [0,1,2,3,4,5,6,7,8,9],
            castFromScroll: ["d10","d10","d12","d12","14","d14","d16","d16","d20","d20"]
        },
        neutral:{
            backstab: [0,1,2,3,4,5,6,7,8,9],
            sneak: [3,5,7,8,9,11,12,13,14,15],
            hide: [1,3,5,7,8,9,10,11,12,13],
            pickPocket: [3,5,7,8,9,11,12,13,14,15],
            climb: [3,5,7,8,9,11,12,13,14,15],
            pickLock: [1,3,5,7,8,9,10,11,12,13],
            findTrap: [1,3,5,7,8,9,10,11,12,13],
            disableTrap: [1,3,5,7,8,9,10,11,12,13],
            forgery: [3,5,7,8,9,11,12,13,14,15],
            disguise: [0,0,1,2,3,4,5,6,7,8],
            readLanguages: [0,1,2,3,4,5,6,7,8,9],
            handlePoison: [0,0,1,2,3,4,5,6,7,8],
            castFromScroll: ["d12","d12","14","d14","d16","d16","d20","d20","d20","d20"]
        }
    };
    this.critDice = function() {
        var crit = this.chain(10);
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
        var diceChain = this.chain(3,16);
        return diceChain[this.lvl - 1];
    };
    this.thiefSkill = function(skill) {
        var skills = [];
        if (this.alignment == 'Chaotic') {
            skills = this.skills.chaotic;
        } else if (this.alignment == 'Lawful') {
            skills = this.skills.lawful;
        } else if (this.alignment == 'Neutral') {
            skills = this.skills.neutral;
        }
    
        val = '';
        switch (skill) {
            case "Backstab"
                val = skills.backstab[this.lvl -1];
                break;
            case "Sneak"
                val = skills.sneak[this.lvl -1];
                break;
            case "Hide"
                val = skills.hide[this.lvl -1];
                break;
            case "PickPockets"
                val = skills.pickPockets[this.lvl -1];
                break;
            case "Climb"
                val = skills.climb[this.lvl -1];
                break;
            case "PickLocks"
                val = skills.pickLocks[this.lvl -1];
                break;
            case "FindTrap"
                val = skills.findTrap[this.lvl -1];
                break;
            case "DisableTrap"
                val = skills.disableTrap[this.lvl -1];
                break;
            case "ForgeDoc"
                val = skills.forgery[this.lvl -1];
                break;
            case "DisguiseSelf"
                val = skills.disguise[this.lvl -1];
                break;
            case "ReadLanguages"
                val = skills.readLanguages[this.lvl -1];
                break;
            case "HandlePoison"
                val = skills.handlePoison[this.lvl -1];
                break;
            case "CastScroll"
                val = skills.castFromScroll[this.lvl -1];
            default:
        }
        return val;
    }
}
