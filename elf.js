function Elf(lvl) {
    this.cClass = "Elf";
    this.lvl = typeof lvl !== 'undefined' ? lvl : 1;
    this.speed = 30;
    this.saves = {
        ref: [1,1,1,2,2,2,3,3,3,4],
        fort: [1,1,1,2,2,2,3,3,3,4],
        will: [1,1,2,2,3,4,4,5,5,6]
    };
    this.titles = ["Wanderer", "Seer", "Quester", "Savant", "Elder"]; 
    this.critDice = function() {
        var crit = this.chain(8,16);
        var val = '';
        if (this.lvl == 1) {
            val = this.stringify(6);
        } else {
            val = crit[Math.floor((this.lvl - 2) / 2)];
        }        
        return val; 
    };
    this.critTable = function() {
        return "II";
    };
    this.titleList = function() {
        return this.titles;
    };
    this.attack = function() {
        return Math.ceil(this.lvl/2);
    };
}
