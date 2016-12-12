function Dwarf() {
    this.cClass = "Dwarf";
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
    this.crit = createDiceChain(10);
    this.crit.push("2d20");
    this.critDice = function(lvl) {
        var val = '';
        if (lvl < 7) {
            val = this.crit[lvl - 1];
        } else {
            if (lvl < 9) {
                val = this.crit[6];
            } else {
                val = this.crit[7];
            }
        }
        return val;
    };
    this.critTable = function(lvl) {
        var val = '';

        if (lvl < 4) {
            val = "III";
        } else if (lvl < 6) {
            val = "IV";
        } else {
            val = "V";
        }
        return val;
    };
    this.titleByAlignment = function(alignment) {
        var titles = [];
        if (alignment == 'Chaotic') {
            titles = this.titles.chaotic;
        } else if (alignment == 'Lawful') {
            titles = this.titles.lawful;
        } else if (alignment == 'Neutral') {
            titles = this.titles.neutral;
        }

        return titles;
    };
    this.attack = function(lvl) {
        var attackChain = createDiceChain(3,10);
        if (lvl < 7) {
            val = attackChain[lvl-1];
        } else {
            var plus = Number(lvl) - 6;
            val = attackChain[6] + "+" + plus;
        }
        return val;
    };
}
