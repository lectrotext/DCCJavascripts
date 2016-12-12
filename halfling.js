function Halfling(lvl) {
    this.cClass = "Halfling";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.speed = 20;
    this.saves = {
        ref: [1,1,2,2,3,4,4,5,5,6],
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = ["Wanderer", "Explorer", "Collector", "Accumulator", "Wise one"]; 
    this.critDice = function(this.lvl) {
        var crit = this.chain(8,16);
        return crit[Math.floor((this.lvl - 1) / 2)];
    };
    this.critTable = function() {
        return "III";
    };
    this.titleList = function() {
        return this.titles;
    };
    this.attack = function() {
        var val = this.lvl;
        if (this.lvl >= 3) { val -= 1; }
        if (this.lvl >= 7) { val -= 1; }        
        return val;
    };
    this.sneak = function() {
        var sneak = [3,5,7,8,9,11,12,13,14,15];
        return sneak[this.lvl -1];
    };
}
