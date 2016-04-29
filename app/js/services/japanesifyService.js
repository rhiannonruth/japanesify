japanesifyApp.service('japanesifyService', ['rulesService',function(rulesService) {
  var self = this;
  var matchedSyllables= [];

  self.splitIntoSyllables = function(string, ruleJP) {
    _matchRules(string, ruleJP);
    var output = matchedSyllables;
    matchedSyllables = [];
    return output;
  };

  function _matchRules(string, ruleJP) {
    var slicedString = string.slice(0, 4);
    var hasThree = slicedString.match(ruleJP.threeCharSyllables());
    var hasTwo = slicedString.match(ruleJP.twoCharSyllables());

    var result;

    if (_isStringLength1(string)) {
      result = string;
      matchedSyllables.push(result);
    } else if(ruleJP.fourCharSyllablesFunc(string)) {
      result = string.slice(0, 4);
      matchedSyllables.push(result);
    } else if(ruleJP.threeCharSyllablesFunc(string)) {
      result = string.slice(0, 3);
      matchedSyllables.push(result);
    } else if (ruleJP.twoCharSyllablesFunc(string)){
      result = string.slice(0,2);
      matchedSyllables.push(result);
    } else {
      result = string[0];
      matchedSyllables.push(result);
    }
    reducedString = string.replace(result, '');
    while (reducedString.length > 0) {
      _matchRules(reducedString, ruleJP);
    }
  }

  function _isStringLength1(string) {
    return string.length===1;
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
}]);
