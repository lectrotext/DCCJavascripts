function Wizard() {
    this.cClass = "Wizard";
    this.speed = 30;
    this.saves = {
        ref: [1,1,1,2,2,2,3,3,3,4],
        fort: [0,0,1,1,1,2,2,2,3,3], 
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = {
        chaotic: ["Cultist", "Shaman", "Diabolist", "Warlock/Witch", "Necromancer"],
        lawful: ["Evoker", "Controller", "Conjurer", "Summoner", "Elementalist"],
        neutral: ["Astrologist", "Enchanter", "Magician", "Thaumaturgist", "Sorcerer"]
    };
    this.critDice = function(lvl) {
        var crit = createDiceChain(7,14);
        crit[0] = "1d6"
        return crit[Math.floor((lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "I";
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
        var attacks = [0,1,1,1,2,2,3,3,4,4];
        return attacks[lvl-1];
    };
}
