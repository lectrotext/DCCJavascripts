function Cleric() {
    this.cClass = "Cleric";
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
    this.critDice = function(lvl) {
        var crit = createDiceChain(8,16);
        return crit[Math.floor((lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "III";
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
        var val = lvl -1;
        if (lvl >= 4) { val -= 1; }
        if (lvl >= 8) { val -= 1; }        
        return val;
    };
}
