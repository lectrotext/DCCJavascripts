function Warrior(lvl, alignment) {
    this.cClass = "Warrior";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.alignment = typeof alignment !== 'undefined' ? alignment : "Chaotic";
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
    this.critDice = function() {
        var crit = this.chain(12);
        crit.push("2d20");
        var val = '';
        if (this.lvl < 6) {
            val = crit[this.lvl - 1];
        } else {
            if (this.lvl < 8) {
                val = crit[5];
            } else {
                val = crit[6];
            }
        }
        return val;
    };
    this.critTable = function() {
        var val = '';
        if (this.lvl < 3) {
            val = "III";
        } else if (this.lvl < 5) {
            val = "IV";
        } else {
            val = "V";
        }
        return val;
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
        var val = '';
        var attackChain = this.chain(3,10);
        if (this.lvl < 7) {
            val = attackChain[this.lvl-1];
        } else {
            var plus = Number(this.lvl) - 6;
            val = attackChain[6] + "+" + plus;
        }
        return val;
    };
    this.critRange = function() {
        var val = '';
        if (this.lvl < 5) {
            val = "19-20";
        } else if (this.lvl < 9) {
            val = "18-20";
        } else {
            val = "17-20";
        }
        return val;
    };
}
