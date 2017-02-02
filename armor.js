function Armor () {

  var armorClass;
  var fumble;
  
  var fumbles = ["d4", "d8", "d12", "d16"];
  var armorTypes = ["None", "Light", "Medium", "Heavy"];
  
  this.fumbleDie = function (aType) {
    return this.fumbles[armorTypes.indexOf(aType)];
  };

  this.findArmorClass = function (acBonus, aglMod, luckMod) {
    acBonus = Number(acBonus);
    aglMod = Number(aglMod);
    luckMod = Number(luckMod);
    return (10 + acBonus, + aglMod + luckMod);
  };
}
