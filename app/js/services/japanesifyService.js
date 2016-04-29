japanesifyApp.service('japanesifyService', ['splitsyllables','rulesService', function(splitsyllables, rulesService) {
  var self = this;
  


  self.translateWord =  function(string) {
    var syllableArray = splitsyllables.parse(string);
    return self.convertToJapanese(syllableArray);
  };


  self.convertToJapanese = function(array, ruleJP = rulesService) {
    var matcher = ruleJP.matcher();
    var newArray = array.map(function(syllable) {
      return matcher[syllable];
    });
    return newArray.join('');
  };

}]);




