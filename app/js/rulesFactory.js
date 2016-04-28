japanesifyApp.factory('RulesFactory', function() {
  function RulesFactory() {
    this.regex = /([b-df-hj-np-tv-z]{2})\b|([b-df-hj-np-tv-z][aeiou][rwy])(\b|(?![aeiouy]))|([bdf-hj-np-tv-z]+[aeo][aeiu])|([b-df-hj-np-tv-z]h[aeiou])|([ln]{2}[aeiou])|\b(ch(?![aeiou]))|([b-df-hj-np-tv-z][aeiou])|([b-df-hj-npqstv-z])|([aeiou])/i;
    this.matcher = {'a'   : 'ア',
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
                    };
  }

  return RulesFactory;
});
