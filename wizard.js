function Wizard(lvl, alignment) {
    this.cClass = "Wizard";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.alignment = typeof alignment !== 'undefined' ? alignment : "Chaotic";
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
    this.critDice = function() {
        var crit = this.chain(7,14);
        crit[0] = this.stringify(6);
        return crit[Math.floor((this.lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "I";
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
        var attacks = [0,1,1,1,2,2,3,3,4,4];
        return attacks[this.lvl-1];
    };
}
