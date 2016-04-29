japanesifyApp.service('splitsyllables', ['rulesService',function(rulesService) {

  var self = this;
  var matchedSyllables= [];
  var rulesArray = rulesService.rules()  

  self.parse = function(string) {
    _matchRules(string);
    var output = matchedSyllables;
    matchedSyllables = [];
    console.log(output)
    return output;
  };

  function _matchRules(string) {

    var slicedString = string.slice(0, 4);
    console.log("slicedString", slicedString)


    console.log(rulesArray)
    var rule=rightRule(slicedString, rulesArray)
    
    matchedSyllables.push(slicedString.match(rule))

    var result = last(matchedSyllables)

    reducedString = string.replace(result, '');
    console.log(reducedString)
    while (reducedString.length > 0) {
      _matchRules(reducedString);
    }
  }

    function last(array) {
      length = array.length
    return array[length-1]
  } 

    function rightRule(string, rules) {
      var something = rules
      console.log(rules) 
      if (!!string.match(rules[0])) {
        return rules[0]
      }
      else { 
        something.splice(0,1)
        rightRule(string, something) 
      }

    }

}]);