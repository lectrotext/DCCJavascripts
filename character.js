function Character() = {
    this.findTitle = function(titles, lvl) {
        var val = '';
        if (lvl >=5) {
            val = titles[4];
        } else if (lvl < 5) {
            val = titles[this.lvl-1];
        }
        return val;
    };
    this.findActionDice = funtion(cClass, lvl) {
        var threeActions = ['Dwarf', 'Elf', 'Warrior', 'Wizard'];
        var val ='';
        if (threeActions.indexOf(cClass) == -1) {
            if (lvl < 6) {
                val = "1d20";
            } else if (lvl == 6) {
                val = "1d20 + 1d14";
            } else if (lvl == 7) {
                val = "1d20 + 1d16";
            } else {
                val = "1d20 + 1d20";
            }
        } else if (threeActions.indexOf(cClass) > -1) {
            if (lvl < 5) {
                val = "1d20";
            } else if (lvl == 5) {
                val = "1d20 + 1d14";
            } else if (lvl == 6) {
                val = "1d20 + 1d16";
            } else if (lvl < 10) {
                val = "1d20 + 1d20";
            } else {
                val = "1d20+1d20+1d14";
            }
        }
        return val;
    };
}
