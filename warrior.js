function Warrior() {
    this.cClass = "Warrior";
    this.speed = 30;
    this.saves = {
        ref: [1,1,1,2,2,2,3,3,3,4],
        fort: [1,1,2,2,3,4,4,5,5,6],
        will: [0,0,1,1,1,2,2,2,3,3] 
    };
    this.titles = {
        chaotic: ["Bandit", "Brigand", "Marauder", "Ravager", "Reaver"],
        lawful: ["Squire", "Champion", "Knight", "Cavalier", "Paladin"],
        neutral: ["Wildling", "Barbarian", "Berserker", "Headman/Headwoman", "Chieftain"]
    };
    this.critDice = function(lvl) {
        var crit = createDiceChain(10);
        crit.push("2d20");
        var val = '';
        if (lvl < 6) {
            val = crit[lvl - 1];
        } else {
            if (lvl < 8) {
                val = crit[6];
            } else {
                val = crit[7];
            }
        }
        return val;
    };
    this.critTable = function(lvl) {
        var val = '';
        if (lvl < 3) {
            val = "III";
        } else if (lvl < 5) {
            val = "IV";
        } else {
            val = "V";
        }
        return val;
    };
    this.getTitleList = function(alignment) {
        var titleList = [];
        if (alignment == 'Chaotic') {
            titleList = this.titles.chaotic;
        } else if (alignment == 'Lawful') {
            titleList = this.titles.lawful;
        } else if (alignment == 'Neutral') {
            titleList = this.titles.neutral;
        }
        return titleList;
    };
    this.attack = function(lvl) {
        var val = '';
        var attackChain = createDiceChain(3,10);
        if (lvl < 7) {
            val = attackChain[lvl-1];
        } else {
            var plus = Number(lvl) - 6;
            val = attackChain[6] + "+" + plus;
        }
        return val;
    };
    this.critRange = function(lvl) {
        var val = '';
        if (lvl < 5) {
            val = "19-20";
        } else if (lvl < 9) {
            val = "18-20";
        } else {
            val = "17-20";
        }
        return val;
    };
}
