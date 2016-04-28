describe('japenesifyService', function (){
  beforeEach(module('japanesifyApp'));

  var japenesifyService, string;

  var ruleJP = {regex: /([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rwy])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiu])|([b-df-hj-np-tv-z]h[aeiou])|([ln]{2}[aeiou])|\b(ch(?![aeiou]))|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i,
                matcher: {'a'   : 'ア',
                          'e'   : 'エ',
                          'b'   : 'ブ',
                          'c'   : 'ク',
                          'd'   : 'ド',
                          'f'   : 'フ',
                          'j'   : 'ジ',
                          'k'   : 'カ',
                          'l'   : 'ル',
                          'n'   : 'ン',
                          'o'   : 'オ',
                          's'   : 'ス',
                          't'   : 'ト',
                          'y'   : 'イ',
                          'ri'  : 'リ',
                          'ka'  : 'カ',
                          'mi'  : 'ミ',
                          'sa'  : 'サ',
                          'mu'  : 'ム',
                          'lo'  : 'ロ',
                          're'  : 'レ',
                          'zo'  : 'ツォ',
                          'to'  : 'ト',
                          'be'  : 'ベ',
                          'ke'  : 'ケ',
                          'vi'  : 'ヴィ',
                          'ca'  : 'カ',
                          'pe'  : 'ピー',
                          'te'  : 'ト',
                          'jo'  : 'ジョー',
                          'di'  : 'ディ',
                          'ya'  : 'ヤ',
                          'ja'  : 'ジャ',
                          'na'  : 'ナ',
                          'si'  : 'サイ',
                          'mo'  : 'モ',
                          'ha'  : 'ハ',
                          'ni'  : 'ニ',
                          'li'  : 'リ',
                          'ne'  : 'ン',
                          'le'  : 'レ',
                          'ma'  : 'メイ',
                          'me'  : 'メ',
                          'ce'  : 'ス',
                          'ga'  : 'ガ',
                          'pa'  : 'パ',
                          'zi'  : 'ツィ',
                          'ju'  : 'ジュ',
                          'yu'  : 'ユ',
                          'ch'  : 'ク',
                          'ck'  : 'ック',
                          'nna' : 'ナ',
                          'nne' : 'ン',
                          'nno' : 'ノ',
                          'lle' : 'ル',
                          'par' : 'パー',
                          'ver' : 'バー',
                          'rew' : 'リュー',
                          'chi' : 'チ',
                          'rhi' : 'リ',
                          'sha' : 'シェー',
                          'lau' : 'ロー',
                          'pau' : 'ポー',
                          'har' : 'ハー',
                          'cey' : 'シー',
                          'phoe': 'フィー',
                          'shee': 'シー',
                          }};

  beforeEach(inject(function(_japanesifyService_){
    japenesifyService = _japanesifyService_;
  }));

  it ('combines a vowel with a preceding consonant', function() {
    expect(japenesifyService.splitIntoSyllables("misa", ruleJP)).toEqual(["mi","sa"]);
    expect(japenesifyService.splitIntoSyllables("erika", ruleJP)).toEqual(["e", "ri","ka"]);
    expect(japenesifyService.splitIntoSyllables("murilo", ruleJP)).toEqual(["mu", "ri","lo"]);
    expect(japenesifyService.splitIntoSyllables("pete", ruleJP)).toEqual(["pe", "te"]);
  });

  it ("slices an 'n' out if it precedes a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("lorenzo", ruleJP)).toEqual(["lo","re","n", "zo"]);
  });

  it ("slices an 'n' out if it's the last letter", function() {
    expect(japenesifyService.splitIntoSyllables("kevin", ruleJP)).toEqual(["ke","vi","n"]);
    expect(japenesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japenesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japenesifyService.splitIntoSyllables("sachin", ruleJP)).toEqual(["sa","chi", "n"]);
    expect(japenesifyService.splitIntoSyllables("rhiannon", ruleJP)).toEqual(["rhi","a", "nno", "n"]);
    expect(japenesifyService.splitIntoSyllables("junyuan", ruleJP)).toEqual(["ju", "n", "yu", "a", "n"]);
  });

  it ("combines a double 'n' and a following vowel", function() {
    expect(japenesifyService.splitIntoSyllables("tobenna", ruleJP)).toEqual(["to","be","nna"]);
    expect(japenesifyService.splitIntoSyllables("anne", ruleJP)).toEqual(["a","nne"]);
  });

  it ("slices an 's' out it precedes a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("yasmin", ruleJP)).toEqual(["ya","s","mi", "n"]);
    expect(japenesifyService.splitIntoSyllables("jasmina", ruleJP)).toEqual(["ja","s","mi", "na"]);
    expect(japenesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
  });

  it ("combines the last 'r'/'w' with a preceding vowel or contonant/vowel pair", function() {
    expect(japenesifyService.splitIntoSyllables("caspar", ruleJP)).toEqual(["ca","s","par"]);
    expect(japenesifyService.splitIntoSyllables("oliver", ruleJP)).toEqual(["o","li","ver"]);
    expect(japenesifyService.splitIntoSyllables("andrew", ruleJP)).toEqual(["a","n","d", "rew"]);
  });

  it ("recognises double consonants in the beggining of name if it's followed by a consonant", function() {
    expect(japenesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
    expect(japenesifyService.splitIntoSyllables("kyle", ruleJP)).toEqual(["k","y","le"]);
  });

  it ("recognises 'sh' and combines it with a following vowel", function() {
    expect(japenesifyService.splitIntoSyllables("shane", ruleJP)).toEqual(["sha","ne"]);
  });

  it ("splits a consonant if it's the last letter, expecpt for 'r'", function() {
    var string = "adil";
    expect(japenesifyService.splitIntoSyllables("adil", ruleJP)).toEqual(["a","di","l"]);
    expect(japenesifyService.splitIntoSyllables("joj", ruleJP)).toEqual(["jo","j"]);
    expect(japenesifyService.splitIntoSyllables("hanif", ruleJP)).toEqual(["ha","ni","f"]);
    expect(japenesifyService.splitIntoSyllables("simon", ruleJP)).toEqual(["si","mo","n"]);
    expect(japenesifyService.splitIntoSyllables("chris", ruleJP)).toEqual(["ch","ri","s"]);
  });

  it ("recognise and split 'ph' followed by a double consonant", function() {
    expect(japenesifyService.splitIntoSyllables("phoebe", ruleJP)).toEqual(["phoe","be"]);
  });

  it ('combines double consonants at the end of name', function() {
    expect(japenesifyService.splitIntoSyllables("nick", ruleJP)).toEqual(["ni","ck"]);
    expect(japenesifyService.splitIntoSyllables("mary", ruleJP)).toEqual(["ma","ry"]);
  });

  it ('combines double vowels if the first vowel is not "i"', function() {
    expect(japenesifyService.splitIntoSyllables("claudia", ruleJP)).toEqual(["c", "lau","di", "a"]);
    expect(japenesifyService.splitIntoSyllables("paul", ruleJP)).toEqual(["pau", "l"]);
    expect(japenesifyService.splitIntoSyllables("harsheet", ruleJP)).toEqual(["har", "shee", "t"]);
  });

  it ('combines double vowels if the first vowel is "i"', function() {
    expect(japenesifyService.splitIntoSyllables("gabrielle", ruleJP)).toEqual(["ga","b", "ri", "e", "lle"]);
    expect(japenesifyService.splitIntoSyllables("patrizio", ruleJP)).toEqual(["pa","t", "ri", "zi", "o"]);
  });

  it ('convert an array of syllables to a japanese string', function() {
    var array = ["ca","s","par"];
    expect(japenesifyService.convertToJapanese(array, ruleJP)).toEqual('カスパー');
  });
});
