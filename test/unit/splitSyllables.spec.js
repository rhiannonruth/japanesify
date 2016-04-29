// describe('splitSyllables', function (){
  
//   beforeEach(module('japanesifyApp'));

//   var splitSyllables;

//   beforeEach(inject(function(_splitSyllables_){
//     splitSyllables = _splitSyllables_;
//   }));


//   describe('#splitSyllables', function (){
//     it ('split string based on regex', function() {
//       names.forEach(function(name){
//         expect(splitSyllables.parse(name.string)).toEqual(name.array);
//       });
//     });
//   });

//   var names = [{string:"caspar",   array:["ca","s","par"],          　　japanese: 'カスパー'},
//              {string:"misa",     array:["mi","sa"],               　　japanese: 'ミサ'},
//              {string:"erika",    array:["e", "ri","ka"],          　　japanese: 'エリカ'},
//              {string:"murilo",   array:["mu", "ri","lo"],         　　japanese: 'ムリロ'},
//              {string:"pete",     array:["pe", "te"],              　　japanese: 'ピート'},
//              {string:"lorenzo",  array:["lo","re","n", "zo"],     　　japanese: 'ロレンツォ'},
//              {string:"kevin",    array:["ke","vi","n"],           　　japanese: 'ケヴィン'},
//              {string:"simon",    array:["si","mo","n"],           　　japanese: 'サイモン'},
//              {string:"yasmin",   array:["ya","s","mi", "n"],      　　japanese: 'ヤスミン'},
//              {string:"sachin",   array:["sa","chi", "n"],         　　japanese: 'サチン'},
//              {string:"rhiannon", array:["rhi","a", "nno", "n"],   　　japanese: 'リアノン'},
//              {string:"junyuan",  array:["ju", "n", "yu", "a", "n"],  japanese: 'ジュンユアン'},
//              {string:"tobenna",  array:["to","be","nna"],            japanese: 'トベナ'},
//              {string:"anne",     array:["a","nne"],                  japanese: 'アン'},
//              {string:"jasmina",  array:["ja","s","mi", "na"],        japanese: 'ジャスミナ'},
//              {string:"oliver",   array:["o","li","ver"],             japanese: 'オリバー'},
//              {string:"andrew",   array:["a","n","d", "rew"],         japanese: 'アンドリュー'},
//              {string:"chris",    array:["ch","ri","s"],              japanese: 'クリス'},
//              {string:"kyle",     array:["k","y","le"],               japanese: 'カイレ'},
//              {string:"shane",    array:["sha","ne"],                 japanese: 'シェーン'},
//              {string:"adil",     array:["a","di","l"],               japanese: 'アディル'},
//              {string:"joj",      array:["jo","j"],                   japanese: 'ジョージ'},
//              {string:"hanif",    array:["ha","ni","f"],              japanese: 'ハニフ'},
//              {string:"nick",     array:["ni","ck"],                  japanese: 'ニック'},
//              {string:"mary",     array:["ma","ry"],                  japanese: 'マリー'},
//              {string:"claudia",  array:["c", "lau","di", "a"],       japanese: 'クローディア'},
//              {string:"paul",     array:["pau", "l"],                 japanese: 'ポール'},
//              {string:"gabrielle",array:["ga","b", "ri", "e", "lle"], japanese: 'ガブリエル'},
//              {string:"patrizio", array:["pa","t", "ri", "zi", "o"],  japanese: 'パトリツィオ'},
//              {string:"phoebe",   array:["phoe","be"],                japanese: 'フィーベ'},
//              {string:"harsheet", array:["har", "shee", "t"],         japanese: 'ハーシート'}
//            ];
// });