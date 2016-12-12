function Halfling() {
    this.cClass = "Halfling";
    this.speed = 20;
    this.saves = {
        ref: [1,1,2,2,3,4,4,5,5,6],
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = ["Wanderer", "Explorer", "Collector", "Accumulator", "Wise one"]; 
    this.critDice = function(lvl) {
        var crit = createDiceChain(8,16);
        return crit[Math.floor((lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "III";
    };
    this.getTitleList = function() {
        return this.titles;
    };
    this.attack = function(lvl) {
        var val = lvl;
        if (lvl >= 3) { val -= 1; }
        if (lvl >= 7) { val -= 1; }        
        return val;
    };
    this.sneak = function(lvl) {
        var sneak = [3,5,7,8,9,11,12,13,14,15];
        return sneak[lvl -1];
    };
}
