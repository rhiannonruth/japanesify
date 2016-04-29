japanesifyApp.service('splitsyllables', ['rulesService',function(rulesService) {

  var self = this;
  var matchedSyllables= [];
  var rulesArray = rulesService.rules()
  

  self.parse = function(string) {
    _matchRules(string);
    var output = matchedSyllables;
    matchedSyllables = [];
    
    return output;
  };

  function _matchRules(string) {

    var slicedString = string.slice(0, 4);
    var result = last(matchedSyllables)

    rightRule(slicedString, rulesArray)

    reducedString = string.replace(result, '');

    while (reducedString.length > 0) {
      _matchRules(reducedString);
    }
  
  }

    function last(array) {
      length = array.length
    return array[length-1]
  } 


    function splitSyllable(string, rule) {
    matchedSyllables.push(string.match(rule)[0])
    }


    function rightRule(string, rules) {

      if (!!string.match(rules[0])) {
        splitSyllable(string, rules[0])
      }
      else { 
        something = rules.slice(1)
        rightRule(string, something) 
      }
    }
}]);