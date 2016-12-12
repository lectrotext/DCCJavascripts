function Cleric(lvl, alignment) {
    this.cClass = "Cleric";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.alignment = typeof alignment !== 'undefined' ? alignment : "Chaotic";
    this.speed = 30;
    this.saves = {
        ref: [0,0,1,1,1,2,2,2,3,3], 
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = {
        chaotic: ["Zealot", "Convert", "Cultist", "Apostle", "High priest"],
        lawful: ["Acolyte", "Heathen-slayer", "Brother", "Curate", "Father"],
        neutral: ["Witness", "Pupil", "Chronicler", "Judge", "Druid"]
    };
    this.critDice = function() {
        var crit = this.chain(8,16);
        return crit[Math.floor((this.lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "III";
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
}
