function Character() {
    this.isClass = function(c) {
        return this.cClass == c;
    };
    this.findTitle = function(titles) {
        var val = '';
        if (this.lvl >=5) {
            val = titles[4];
        } else if (this.lvl < 5) {
            val = titles[this.lvl-1];
        }
        return val;
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
    this.actionDice = function() {
        var threeActions = ['Dwarf', 'Elf', 'Warrior', 'Wizard'];
        var val ='';
        if (threeActions.indexOf(this.cClass) == -1) {
            if (this.lvl < 6) {
                val = "1d20";
            } else if (this.lvl == 6) {
                val = "1d20 + 1d14";
            } else if (this.lvl == 7) {
                val = "1d20 + 1d16";
            } else {
                val = "1d20 + 1d20";
            }
        } else if (threeActions.indexOf(this.cClass) > -1) {
            if (this.lvl < 5) {
                val = "1d20";
            } else if (this.lvl == 5) {
                val = "1d20 + 1d14";
            } else if (this.lvl == 6) {
                val = "1d20 + 1d16";
            } else if (this.lvl < 10) {
                val = "1d20 + 1d20";
            } else {
                val = "1d20+1d20+1d14";
            }
        }
        return val;
    };
    this.save = function(save) {
        var val = 0;
        if (save == "Ref") {
            val = this.saves.ref[this.lvl -1];
        } else if (save == "Fort") {
            val = this.saves.fort[this.lvl -1];
        } else if (save == "Will") {
            val = this.saves.will[this.lvl -1];
        }
        return val;
    };
}
