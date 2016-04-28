japanesifyApp.service('rulesService', ['CONVERSION_CONSTANT', function(CONVERSION_CONSTANT) {

  this.matcher = function() {
    return CONVERSION_CONSTANT;
  };

  var vowels = ['a','e','i','o','u'];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  _vowelAt = function(index, name) {
    return vowels.includes(name.charAt(index));
  };

  _consAt = function(index, name) {
    return consonants.includes(name.charAt(index));
  };

  _charAt = function(index, name, letter) {
    return name.charAt(index) === letter;
  };

  consVowelFunc = function(name) {
    return _consAt(0, name) && _vowelAt(1, name);
  };

  doubleConsFunc = function(name) {
    return _consAt(0, name) && _consAt(1, name);
  };

  startsCHConsFunc = function(name) {
    return _charAt(0, name, 'c') && _charAt(1, name, 'h') && _vowelAt(2, name);
  };

  consHVowelFunc = function(name) {
    return _consAt(0, name) && _charAt(1, name, 'h') && _vowelAt(2, name);
  };

  consDoubleVowelFunc = function(name) {
    // this takes all vowels but regex is [aeo][aeiu]
    return _consAt(0, name) && _vowelAt(1, name) && _vowelAt(2, name);
  };

  consVowelRWYFunc = function(name) {
    var rORyORw = _charAt(2, name, 'r') || _charAt(2, name, 'w') || _charAt(2, name, 'y');
    return _consAt(0, name) && _vowelAt(1, name) && (rORyORw) && !(_vowelAt(3, name));
  };

  doubleLNVowelFunc = function(name) {
    var lORnAt0 = _charAt(0, name, 'l') || _charAt(0, name, 'n');
    var lORnAt1 = _charAt(1, name, 'l') || _charAt(1, name, 'n');
    return lORnAt0 && lORnAt1 && _vowelAt(2, name);
  };

  this.twoCharSyllablesFunc = function(name) {
    return (consVowelFunc(name) || doubleConsFunc(name) || startsCHConsFunc(name));
  };

  this.threeCharSyllablesFunc = function(name) {
    return (consHVowelFunc(name) || consDoubleVowelFunc(name) || consVowelRWYFunc(name) || doubleLNVowelFunc(name));
  };

  var consVowel = '[b-df-hj-np-tv-z][aeiou]';
  var doubleCons = '[b-df-hj-np-tv-z]{2}\\b';
  var startsCHCons = '\\bch(?![aeiou])';
  var consHVowel = '[b-df-hj-np-tv-z]h[aeiou]';
  var consDoubleVowel = '[bdf-hj-np-tv-z]+[aeo][aeiu]';
  var consVowelRWY = '[b-df-hj-np-tv-z][aeiou][rwy](\\b|(?![aeiouy]))';
  var doubleLNVowel = '[ln]{2}[aeiou]';

  this.twoCharSyllables = function(name){
    return new RegExp('^'+'('+consVowel+'|'+
                              doubleCons+'|'+
                              startsCHCons+')', 'i');
  };

  this.threeCharSyllables = function(name){
    return new RegExp('^'+'('+consHVowel+'|'+
                              consDoubleVowel+'|'+
                              consVowelRWY+'|'+
                              doubleLNVowel+')', 'i');
  };
}]);
