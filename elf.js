function Elf() {
    this.cClass = "Elf";
    this.speed = 30;
    this.saves = {
        ref: [1,1,1,2,2,2,3,3,3,4],
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = ["Wanderer", "Seer", "Quester", "Savant", "Elder"]; 
    this.critDice = function(lvl) {
        var crit = createDiceChain(8,16);
        var val = '';
        if (lvl == 1) {
            val = "1d6";
        } else {
            val = crit[Math.floor((lvl - 2) / 2)];
        }        
        return val; 
    };
    this.critTable = function() {
        return "II";
    };
    this.getTitleList = function() {
        return this.titles;
    };
    this.attack = function(lvl) {
        return Math.ceil(lvl/2);
    };
}
