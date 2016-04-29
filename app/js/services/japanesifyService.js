japanesifyApp.service('japanesifyService', ['rulesService',function(rulesService) {
  var self = this;
  var matchedSyllables= [];

  var fourSyll = rulesService.fourCharSyllables()
  var threeSyll = rulesService.threeCharSyllables()
  var twoSyll = rulesService.twoCharSyllables()
  var oneSyll = /[A-Z]/i

  var ruleArray = [fourSyll,threeSyll,twoSyll, oneSyll]

  self.splitIntoSyllables = function(string, ruleJP) {
    _matchRules(string, ruleJP);
    var output = matchedSyllables;
    matchedSyllables = [];
    return output;
  };

  function _matchRules(string, ruleJP) {

  
    var slicedString = string.slice(0, 4);
    
    ruleArray.forEach(function(rule){
       if (!!slicedString.match(rule)) {break;}
       matchedSyllables.push(slicedString.match(rule)[0])
    })

    console.log(matchedSyllables)

    var result = last(matchedSyllables)

    reducedString = string.replace(result, '');
    
    while (reducedString.length > 0) {
      _matchRules(reducedString, ruleJP);
    }
  }

  self.convertToJapanese = function(array, ruleJP) {
    var matcher = ruleJP.matcher();
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    return newArray.join('');
  };

  function filterEmptyString(element) {
    if ((element !== '') | (element !== undefined)); {
      return element;
    }
  }

  self.translateWord =  function(string) {
    var syllableArray = self.splitIntoSyllables(string, rulesService);
    return self.convertToJapanese(syllableArray, rulesService);
  };

  function last(array) {
    length = array.length
    return array[length-1]
  } 



}]);
