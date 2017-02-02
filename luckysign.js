function LuckySign(luckySign) {
    this.luckySign = typeof luckySign !== 'undefined' ? luckySign : 1;
    this.luckMod = 0;
    this.luckySigns = [1,2,3,10,11,17,20,21,22,24,26,30];

    this.isLucky = function()  {
        return (this.luckySigns.indexOf(luckySign) != -1);
    };

    this.isAttackBonusSign = function() {
        return (
            this.isAllAtkSign() ||
            this.isMeleeAtkSign() ||
            this.isRangeAtkSign()
        );
    };

    this.isAllAtkSign = function() {
        return (this.luckySign == 1);
    };

    this.isMeleeAtkSign = function() {
        return (this.luckySign == 2 || this.isAllAtkSign());
    };

    this.isRangeAtkSign = function() {
        return (this.luckySign == 3 || this.isAllAtkSign());
    };

    this.isThiefSkillSign = function() {
        return (
            this.isAllSkillsSign() ||
            this.isTrapsSign()
        );
    };

    this.isAllSkillsSign = function() {
        return (this.luckySign == 10);
    };

    this.isTrapsSign = function() {
        return (this.luckySign == 11);
    };

    this.isSavingThrowSign = function() {
        return (
            this.isAllSavesSign() ||
            this.isFortSavesSign() ||
            this.isRefSavesSigns() ||
            this.isWillSavesSign()
        );
    };

    this.isAllSavesSign = function() {
        return (this.luckySign == 17);
    };

    this.isFortSavesSign = function() {
        return (this.luckySign == 20);
    };

    this.isRefSavesSign = function() {
        return (this.luckySign == 21);
    };

    this.isWillSavesSign = function() {
        return (this.luckySign == 22);
    };

    this.isArmorClassSign = function() {
        return (this.luckySign == 23);
    };

    this.isInitiativeSign = function() {
        return (this.luckySign == 24);
    };

    this.isCritTableSign = function() {
        return (this.luckySign == 26);
    };

    this.isFumbleSign = function() {
        return (this.luckySign == 28);
    };

    this.isSpeedSign = function() {
        return (this.luckySign == 30);
    };
}
