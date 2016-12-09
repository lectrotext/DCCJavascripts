/**
 * generates a dice chain for any given scenario.  without
 * arguments 1d3-1d30 is returned as an array
 * of strings.
 * @param to int
 * @param from int
 * @param add1d bool
 * @returns {Array}
 */
function createDiceChain(to, from, add1d) {
    // Default parameter values
    to = typeof to !== 'undefined' ? to : 3;
    from = typeof from !== 'undefined' ? from : 30;
    add1d = typeof add1d !== 'undefined' ? add1d : true;
    // Setting up variables
    var values = [3,4,5,6,7,8,10,12,14,16,20,24,30];
    var diceChain = [];
    function addString1d(item) {
      return "1d" + item;
    }
    // creating return
    if (values.indexOf(to) != -1 && values.indexOf(from) != -1)
{
      diceChain = values.slice(values.indexOf(to),
values.indexOf(from)+1);
    }
    if (add1d) {
      diceChain = diceChain.map(addString1d);
    }
    // return diceChain
    return diceChain;
}
