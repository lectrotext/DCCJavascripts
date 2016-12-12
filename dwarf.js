function Dwarf(lvl, alignment) {
    this.cClass = "Dwarf";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.alignment = typeof alignment !== 'undefined' ? alignment : "Chaotic";
    this.speed = 20;
    this.saves = {
        ref: [1,1,1,2,2,2,3,3,3,4],
        fort: [1,1,2,2,3,4,4,5,5,6],
        will: [1,1,1,2,2,2,3,3,3,4]
    };
    this.titles = {
        chaotic: ["Rebel", "Dissident", "Exile", "Iconoclast", "Renegade"],
        lawful: ["Agent", "Broker", "Delegate", "Envoy", "Syndic"],
        neutral: ["Apprentice", "Novice", "Journeyer", "Crafter", "Thegn"]
    };
    this.critDice = function() {
        var crit = this.chain(10);
        crit.push("2d20");
        var val = '';
        if (this.lvl < 7) {
            val = crit[this.lvl - 1];
        } else {
            if (this.lvl < 9) {
                val = crit[6];
            } else {
                val = crit[7];
            }
        }
        return val;
    };
    this.critTable = function() {
        var val = '';
        if (this.lvl < 4) {
            val = "III";
        } else if (this.lvl < 6) {
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
}
