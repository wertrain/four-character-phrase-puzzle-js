{
  'use strict';
  
  const CHARACTER_SIZE = 64;

  FourCharacterPhrasePuzzle.FourCharacterPhrase = class {
    constructor(fcp) {
      this.text = fcp;
    }
    indexOf(i) {
      return this.text[i]
    }
    get length() {
      return this.text.length;
    }
  }

  FourCharacterPhrasePuzzle.draw = function(context, fcp, x, y) {
    context.font = CHARACTER_SIZE + 'px serif';
    for (let i = 0; i < fcp.length; ++i) {
      context.fillText(fcp.indexOf(i), x, y + (CHARACTER_SIZE * i));
    }
  };

  FourCharacterPhrasePuzzle.getFCP = function(index) {
    return FourCharacterPhraseTable[index].text;
  };
  FourCharacterPhrasePuzzle.getRandomFCP = function() {
    let index = Math.floor(Math.random() * Math.floor(FourCharacterPhraseTable.length));
    return FourCharacterPhrasePuzzle.getFCP(index);
  };

  

  let FourCharacterPhraseTable = [
    { text: '一衣帯水', read:'いちいたいすい' },
    { text: '犬馬之労', read:'けんばのろう' },
    { text: '羊頭狗肉', read:'ようとうくにく' },
    { text: '鶏鳴狗盗', read:'けいめいくとう' },
    { text: '切磋琢磨', read:'せっさたくま' },
    { text: '他山之石', read:'たざんのいし' },
    { text: '一意専心', read:'いちいせんしん' },
    { text: '粒々辛苦', read:'りゅうりゅうしんく' },
    { text: '傍若無人', read:'ぼうじゃくぶじん' },
    { text: '行雲流水', read:'こううんりゅうすい' },
    { text: '以心伝心', read:'いしんでんしん' },
    { text: '文質彬彬', read:'ぶんしつひんぴん' },
    { text: '温故知新', read:'おんこちしん' },
    { text: '一石二鳥', read:'いっせきにちょう' },
    { text: '二律背反', read:'にりつはいはん' },
    { text: '朝三暮四', read:'ちょうさんぼし' },
    { text: '朝令暮改', read:'ちょうれいぼかい' },
    { text: '南船北馬', read:'なんせんほくば' },
    { text: '呉越同舟', read:'ごえつどうしゅう' },
    { text: '臥薪嘗胆', read:'がしんしょうたん' },
    { text: '西施之顰', read:'せいしのひそみ' },
    { text: '明眸皓歯', read:'めいぼうこうし' },
    { text: '四面楚歌', read:'しめんそか' },
    { text: '抜山蓋世', read:'ばつざんがいせい' },
    { text: '巻土重来', read:'けんどちょうらい' },
    { text: '栄耀栄華', read:'えいようえいが' },
    { text: '槿花一朝', read:'きんかいっちょう' },
    { text: '門前雀羅', read:'もんぜんじゃくら' },
    { text: '乾坤一擲', read:'けんこんいってき' },
    { text: '先憂後楽', read:'せんゆうこうらく' },
    { text: '付和雷同', read:'ふわらいどう' },
    { text: '大器晩成', read:'たいきばんせい' },
    { text: '雪案蛍窓', read:'せつあんけいそう' },
    { text: '晴耕雨読', read:'せいこううどく' },
    { text: '巧言令色', read:'こうげんれいしょく' },
    { text: '君子豹変', read:'くんしひょうへん' },
    { text: '二束三文', read:'にそくさんもん' },
    { text: '三位一体', read:'さんみいったい' },
    { text: '青天霹靂', read:'せいてんのへきれき' },
    { text: '前人未踏', read:'ぜんじんみとう' },
    { text: '漁夫之利', read:'ぎょふのり' },
    { text: '天長地久', read:'てんちょうちきゅう' },
    { text: '比翼連理', read:'ひよくれんり' },
    { text: '豪放磊落', read:'ごうほうらいらく' },
    { text: '小心翼翼', read:'しょうしんよくよく' },
    { text: '春風駘蕩', read:'しゅんぷうたいとう' },
    { text: '天真爛漫', read:'てんしんらんまん' },
    { text: '玉石混交', read:'ぎょくせきこんこう' },
    { text: '千載一遇', read:'せんざいいちぐう' },
    { text: '南山之寿', read:'なんざんのじゅ' },
    { text: '画龍点睛', read:'がりょうてんせい' },
    { text: '明窓浄机', read:'めいそうじょうき' },
    { text: '孟母断機', read:'もうぼだんき' },
    { text: '天衣無縫', read:'てんいむほう' },
    { text: '泰山北斗', read:'たいざんほくと' },
    { text: '桃李満門', read:'とうりまんもん' },
    { text: '柳暗花明', read:'りゅうあんかめい' },
    { text: '山紫水明', read:'さんしすいめい' },
    { text: '黄梁一炊', read:'こうりょういっすい' },
    { text: '率先垂範', read:'そっせんすいはん' },
    { text: '品行方正', read:'ひんこうほうせい' },
    { text: '清廉潔白', read:'せいれんけっぱく' },
    { text: '曲水流觴', read:'きょくすいりゅうしょう' },
    { text: '三寒四温', read:'さんかんしおん' },
    { text: '四海兄弟', read:'しかいけいてい' },
    { text: '前途洋洋', read:'ぜんとようよう' },
    { text: '立身出世', read:'りっしんしゅっせ' },
    { text: '青雲之志', read:'せいうんのこころざし' },
    { text: '鶏口牛後', read:'けいこうぎゅうご' },
    { text: '精励恪勤', read:'せいれいかっきん' },
    { text: '自画自賛', read:'じがじさん' },
    { text: '我田引水', read:'がでんいんすい' },
    { text: '浅学非才', read:'せんがくひさい' },
    { text: '和光同塵', read:'わこうどうじん' },
    { text: '守株待兎', read:'しゅしゅたいと' },
    { text: '塞翁之馬', read:'さいおうがのうま' },
    { text: '漱石枕流', read:'そうせきちんりゅう' },
    { text: '当意即妙', read:'とういそくみょう' },
    { text: '臨機応変', read:'りんきおうへん' },
    { text: '茶煙鬢糸', read:'ちゃえんびんし' },
    { text: '光風霽月', read:'こうふうせいげつ' },
    { text: '夜郎自大', read:'やろうじだい' },
    { text: '鼓腹撃壌', read:'こふくげきじょう' },
    { text: '土階三等', read:'どかいさんとう' },
    { text: '酒池肉林', read:'しゅちにくりん' },
    { text: '悪逆無道', read:'あくぎゃくむどう' },
    { text: '荒唐無稽', read:'こうとうむけい' },
    { text: '四分五裂', read:'しぶんごれつ' },
    { text: '五里霧中', read:'ごりむちゅう' },
    { text: '自暴自棄', read:'じぼうじき' },
    { text: '君子三楽', read:'くんしさんらく' },
    { text: '面目躍如', read:'めんもくやくじょ' },
    { text: '国士無双', read:'こくしむそう' },
    { text: '創業守成', read:'そうぎょうしゅせい' },
    { text: '衣錦還郷', read:'にしきをきてきょうにかえる' },
    { text: '五風十雨', read:'ごふうじゅう' },
    { text: '意気揚々', read:'いきようよう' },
    { text: '直情径行', read:'ちょくじょうけいこう' },
    { text: '喜怒哀楽', read:'きどあいらく' },
    { text: '百家争鳴', read:'ひゃくかそうめい' },
    { text: '百花繚乱', read:'ひゃくかりょうらん' },
    { text: '高山流水', read:'こうざんりゅうすい' },
    { text: '管鮑之交', read:'かんぽうのまじわり' },
    { text: '刎頸之交', read:'ふんけいのまじわり' },
    { text: '単刀直入', read:'たんとうちょくにゅう' },
    { text: '月下氷人', read:'げっかひょうじん' },
    { text: '電光石火', read:'でんこうせっか' },
    { text: '山高水長', read:'さんこうすいちょう' },
    { text: '縁木求魚', read:'えんぼくきゅうぎょ' },
    { text: '金科玉条', read:'きんかぎょくじょう' },
    { text: '普天卒土', read:'ふてんそっと' },
    { text: '桑田碧海', read:'そうでんへきかい' },
    { text: '驚天動地', read:'きょうてんどうち' },
    { text: '五臓六腑', read:'ごぞうろっぷ' },
    { text: '六根清浄', read:'ろっこんしょうじょう' },
    { text: '傾国傾城', read:'けいこくけいせい' },
    { text: '沈魚落雁', read:'ちんぎょらくがん' },
    { text: '窮鼠噛猫', read:'きゅうそねこをかむ' },
    { text: '汗牛充棟', read:'かんぎゅうじゅうとう' },
    { text: '虎視眈眈', read:'こしたんたん' },
    { text: '烏兎匆匆', read:'うとそうそう' },
    { text: '臥龍鳳雛', read:'がりょうほうすう' },
    { text: '三顧之礼', read:'さんこのれい' },
    { text: '画蛇添足', read:'がだてんそく' },
    { text: '馬耳東風', read:'ばじとうふう' },
    { text: '多岐亡羊', read:'たきぼうよう' },
    { text: '籠鳥檻猿', read:'ろうちょうかんえん' },
    { text: '元軽白俗', read:'げんけいはくぞく' },
    { text: '鶏群一鶴', read:'けいぐんのいっかく' },
    { text: '青眼白眼', read:'せいがんはくがん' },
    { text: '喪家之狗', read:'そうかのいぬ' },
    { text: '猪突猛進', read:'ちょとつもうしん' },
    { text: '刻舟求剣', read:'こくしゅうきゅうけん' },
    { text: '切歯扼腕', read:'せっしやくわん' },
    { text: '和魂漢才', read:'わこんかんさい' },
    { text: '唯々諾々', read:'いいだくだく' },
    { text: '呑舟之魚', read:'どんしゅうのうお' },
    { text: '背水之陣', read:'はいすいのじん' },
    { text: '百尺竿頭', read:'ひゃくしゃくかんとう' },
    { text: '空中楼閣', read:'くうちゅうのろうかく' },
    { text: '七歩之才', read:'しちほのさい' },
    { text: '隔靴掻痒', read:'かっかそうよう' },
    { text: '言語道断', read:'ごんごどうだん' },
    { text: '戦戦恐恐', read:'せんせんきょうきょう' },
    { text: '後生可畏', read:'こうせいおそるべし' },
    { text: '換骨奪胎', read:'かんこつだったい' },
    { text: '浩然之気', read:'こうぜんのき' },
    { text: '欣喜雀躍', read:'きんきじゃくやく' },
    { text: '軽求肥馬', read:'けいきゅうひば' },
    { text: '偕老同穴', read:'かいろうどうけつ' },
    { text: '琴瑟相和', read:'きんしつあいわす' },
    { text: '風樹之歎', read:'ふうじゅのたん' },
    { text: '権謀術数', read:'けんぼうじゅつすう' },
    { text: '堅忍不抜', read:'けんにんふばつ' },
    { text: '出藍之誉', read:'しゅつらんのほまれ' },
    { text: '朝雲暮雨', read:'ちょううんぼう' },
    { text: '合従連衡', read:'がっしょうれんこう' },
    { text: '呉下阿蒙', read:'ごかのあもう' },
    { text: '呉牛喘月', read:'ごぎゅうつきにあえぐ' },
    { text: '流汗淋漓', read:'りゅうかんりんり' },
    { text: '心頭滅却', read:'しんとうめっきゃく' },
    { text: '夏炉冬扇', read:'かろとうせん' },
    { text: '南柯一夢', read:'なんかいちむ' },
    { text: '壺中之天', read:'こちゅうのてん' },
    { text: '七転八倒', read:'しちてんばっとう' },
    { text: '八方美人', read:'はっぽうびじん' },
    { text: '美人薄命', read:'びじんはくめい' },
    { text: '一日之長', read:'いちじつのちょう' },
    { text: '一網打尽', read:'いちもうだじん' },
    { text: '天網恢恢', read:'てんもうかいかい' },
    { text: '天馬行空', read:'てんばこうくう' },
    { text: '鱸膾蓴羮', read:'ろかいじゅんこう' },
    { text: '清風明月', read:'せいふうめいげつ' },
    { text: '羽化登仙', read:'うかとうせん' },
    { text: '杯盤狼藉', read:'はいばんろうぜき' },
    { text: '文武両道', read:'ぶんぶりょうどう' },
    { text: '茫然自失', read:'ぼうぜんじしつ' },
    { text: '起死回生', read:'きしかいせい' },
    { text: '危急存亡', read:'ききゅうそんぼう' },
    { text: '危機一髪', read:'ききいっぱつ' },
    { text: '正正堂堂', read:'せいせいどうどう' },
    { text: '公明正大', read:'こうめいせいだい' },
    { text: '肝胆相照', read:'かんたんあいてらす' },
    { text: '多多益弁', read:'たたますますべんず' },
    { text: '自業自得', read:'じごうじとく' },
    { text: '因果応報', read:'いんがおうほう' },
    { text: '天罰覿面', read:'てんばつてきめん' },
    { text: '水魚之交', read:'すいぎょのまじわり' },
    { text: '曲学阿世', read:'きょくがくあせい' },
    { text: '弱肉強食', read:'じゃくにくきょうしょく' },
    { text: '絶体絶命', read:'ぜったいぜつめい' },
    { text: '九死一生', read:'きゅうしいっしょう' },
    { text: '流言飛語', read:'りゅうげんひご' },
    { text: '井底之蛙', read:'せいていのあ' },
    { text: '蜀犬吠日', read:'しょくけんはいじつ' },
    { text: '魑魅魍魎', read:'ちみもうりょう' },
    { text: '妖怪変化', read:'ようかいへんげ' },
    { text: '前度劉郎', read:'ぜんどりゅうろう' },
    { text: '奇貨可居', read:'きかおくべし' },
    { text: '優柔不断', read:'ゆうじゅうふだん' },
    { text: '悠悠自適', read:'ゆうゆうじてき' },
    { text: '三三五五', read:'さんさんごご' },
    { text: '東山高臥', read:'とうざんこうが' },
    { text: '閑雲野鶴', read:'かんうんやかく' },
    { text: '鶴髪鶏皮', read:'かくはつけいひ' },
    { text: '黄髪垂髫', read:'こうはつすいちょう' },
    { text: '倚門之望', read:'いもんのぼう' },
    { text: '反哺之心', read:'はんぽのこころ' },
    { text: '夜雨対床', read:'やうたいしょう' },
    { text: '江雲渭樹', read:'こううんいじゅ' },
    { text: '常住坐臥', read:'じょうじゅうざが' },
    { text: '東奔西走', read:'とうほんせいそう' },
    { text: '神出鬼没', read:'しんしゅつきぼつ' },
    { text: '勇往邁進', read:'ゆうおうまいしん' },
    { text: '横行闊歩', read:'おうこうかっぽ' },
    { text: '跳梁跋扈', read:'ちょうりょうばっこ' },
    { text: '十羊九牧', read:'じゅうようきゅうぼく' },
    { text: '繁文縟礼', read:'はんぶんじょくれい' },
    { text: '規矩準縄', read:'きくじゅんじょう' },
    { text: '支離滅裂', read:'しりめつれつ' },
    { text: '有為転変', read:'ういてんぺん' },
    { text: '栄枯盛衰', read:'えいこせいすい' },
    { text: '刻苦勉励', read:'こくくべんれい' },
    { text: '粉骨砕身', read:'ふんこつさいしん' },
    { text: '迂余曲折', read:'うよきょくせつ' },
    { text: '初志貫徹', read:'しょしかんてつ' },
    { text: '空前絶後', read:'くうぜんぜつご' },
    { text: '孟母三遷', read:'もうぼさんせん' },
    { text: '匹夫之勇', read:'ひっぷのゆう' },
    { text: '剛毅木訥', read:'ごうきぼくとつ' },
    { text: '質実剛健', read:'しつじつごうけん' },
    { text: '虚心坦懐', read:'きょしんたんかい' },
    { text: '公平無私', read:'こうへいむし' },
    { text: '青天白日', read:'せいてんはくじつ' },
    { text: '秋霜烈日', read:'しゅうそうれつじつ' },
    { text: '是是非非', read:'ぜぜひひ' },
    { text: '無欲恬淡', read:'むよくてんたん' },
    { text: '志操堅固', read:'しそうけんご' },
    { text: '温厚篤実', read:'おんこうとくじつ' },
    { text: '箕裘之業', read:'ききゅうのぎょう' },
    { text: '面目躍如', read:'めんもくやくじょ' },
    { text: '士農工商', read:'しのうこうしょう' },
    { text: '一知半解', read:'いっちはんかい' },
    { text: '読書百遍', read:'どくしょひゃっぺん' },
    { text: '読書三余', read:'どくしょさんよ' },
    { text: '談論風発', read:'だんろんふうはつ' },
    { text: '内憂外患', read:'ないゆうがいかん' },
    { text: '因循姑息', read:'いんじゅんこそく' },
    { text: '責任転嫁', read:'せきにんてんか' },
    { text: '信賞必罰', read:'しんしょうひつばつ' },
    { text: '和氏之璧', read:'かしのへき' },
    { text: '散髪箕踞', read:'さんぱつききょ' },
    { text: '蓬頭垢面', read:'ほうとうこうめん' },
    { text: '敝衣破帽', read:'へいいはぼう' },
    { text: '放歌高吟', read:'ほうかこうぎん' },
    { text: '悲憤慷慨', read:'ひふんこうがい' },
    { text: '気息奄奄', read:'きそくえんえん' },
    { text: '曖昧模糊', read:'あいまいもこ' },
    { text: '不得要領', read:'ふとくようりょう' },
    { text: '侃侃諤諤', read:'かんかんがくがく' },
    { text: '喧喧囂囂', read:'けんけんごうごう' },
    { text: '無我夢中', read:'むがむちゅう' },
    { text: '右顧左眄', read:'うこさべん' },
    { text: '橙黄橘緑', read:'とうこうきつりょく' },
    { text: '白砂青松', read:'はくさせいしょう' },
    { text: '長汀曲浦', read:'ちょうていきょくほ' },
    { text: '晴好雨奇', read:'せいこううき' },
    { text: '山容水態', read:'さんようすいたい' },
    { text: '風光明媚', read:'ふうこうめいび' },
    { text: '松柏後凋', read:'しょうはくごちょう' },
    { text: '唇歯輔車', read:'しんしほしゃ' },
    { text: '歯亡舌存', read:'はほろびてしたそんす' },
    { text: '一病息災', read:'いちびょうそくさい' },
    { text: '蒲柳之質', read:'ほりゅうのしつ' },
    { text: '容貌魁偉', read:'ようぼうかいい' },
    { text: '人品骨柄', read:'じんぴんこつがら' },
    { text: '福徳円満', read:'ふくとくえんまん' },
    { text: '不老長寿', read:'ふろうちょうじゅ' },
    { text: '厚顔無恥', read:'こうがんむち' },
    { text: '出処進退', read:'しゅっしょしんたい' },
    { text: '依怙贔屓', read:'えこひいき' },
    { text: '一視同仁', read:'いっしどうじん' },
    { text: '独断専行', read:'どくだんせんこう' },
    { text: '周章狼狽', read:'しゅうしょうろうばい' },
    { text: '一陽来復', read:'いちようらいふく' },
    { text: '順風満帆', read:'じゅんぷうまんぱん' },
    { text: '忘年之交', read:'ぼうねんのこう' },
    { text: '狐疑逡巡', read:'こぎしゅんじゅん' },
    { text: '首鼠両端', read:'しゅそりょうたん' },
    { text: '十年一日', read:'じゅうねんいちじつ' },
    { text: '一日千秋', read:'いちじつせんしゅう' },
    { text: '櫛風沐雨', read:'しっぷうもくう' },
    { text: '大安吉日', read:'たいあんきちじつ' },
    { text: '藍尾の酒', read:'らんびのさけ' },
    { text: '糟糠之妻', read:'そうこうのつま' },
    { text: '一家団欒', read:'いっかだんらん' },
    { text: '暖衣飽食', read:'だんいほうしょく' },
    { text: '冠婚葬祭', read:'かんこんそうさい' },
    { text: '老少不定', read:'ろうしょうふじょう' },
    { text: '千秋万歳', read:'せんしゅうばんざい' },
    { text: '諸行無常', read:'しょぎょうむじょう' },
    { text: '新陳代謝', read:'しんちんたいしゃ' },
    { text: '一蓮托生', read:'いちれんたくしょう' },
    { text: '風林火山', read:'ふうりんかざん' },
    { text: '千軍万馬', read:'せんぐんばんば' },
    { text: '一騎当千', read:'いっきとうせん' },
    { text: '深謀遠慮', read:'しんぼうえんりょ' },
    { text: '遠交近攻', read:'えんこうきんこう' },
    { text: '論功行賞', read:'ろんこうこうしょう' },
    { text: '眉目秀麗', read:'びもくしゅうれい' },
    { text: '筋骨隆隆', read:'きんこつりゅうりゅう' },
    { text: '温柔敦厚', read:'おんじゅうとんこう' },
    { text: '軽佻浮薄', read:'けいちょうふはく' },
    { text: '徒手空拳', read:'としゅくうけん' },
    { text: '暴虎憑河', read:'ぼうこひょうが' },
    { text: '獅子奮迅', read:'ししふんじん' },
    { text: '波瀾万丈', read:'はらんばんじょう' },
    { text: '落月屋梁', read:'らくげつおくりょう' },
    { text: '孤立無援', read:'こりつむえん' },
    { text: '天涯孤独', read:'てんがいこどく' },
    { text: '孤影蕭然', read:'こえいしょうぜん' },
    { text: '不撓不屈', read:'ふとうふくつ' },
    { text: '知足安分', read:'ちそくあんぶん' },
    { text: '修身斉家', read:'しゅうしんせいか' },
    { text: '格物致知', read:'かくぶつちち' },
    { text: '実事求是', read:'じつじきゅうぜ' },
    { text: '経世済民', read:'けいせいさいみん' },
    { text: '綸言如汗', read:'りんげんあせのごとし' },
    { text: '駟不及舌', read:'しもしたにおよばず' },
    { text: '頑迷固陋', read:'がんめいころう' },
    { text: '前車之轍', read:'ぜんしゃのてつ' },
    { text: '殷鑑不遠', read:'いんかんとおからず' },
    { text: '面従腹背', read:'めんじゅうふくはい' },
    { text: '傲岸不遜', read:'ごうがんふそん' },
    { text: '多士済済', read:'たしせいせい' },
    { text: '余裕綽綽', read:'よゆうしゃくしゃく' },
    { text: '自給自足', read:'じきゅうじそく' },
    { text: '同病相憐', read:'どうびょうあいあわれむ' },
    { text: '九牛一毛', read:'きゅうぎゅうのいちもう' },
    { text: '告朔餼羊', read:'こくさくのきよう' },
    { text: '有名無実', read:'ゆうめいむじつ' },
    { text: '老驥伏櫪', read:'ろうきふくれき' },
    { text: '駑馬十駕', read:'どばじゅうが' },
    { text: '眼光紙背', read:'がんこうしはい' },
    { text: '韋編三絶', read:'いへんさんぜつ' },
    { text: '読書三到', read:'どくしょさんとう' },
    { text: '断章取義', read:'だんしょうしゅぎ' },
    { text: '断簡零墨', read:'だんかんれいぼく' },
    { text: '文人墨客', read:'ぶんじんぼっかく' },
    { text: '気韻生動', read:'きいんせいどう' },
    { text: '人面桃花', read:'じんめんとうか' },
    { text: '人面獣心', read:'じんめんじゅうしん' },
    { text: '鯨飲馬食', read:'げいいんばしょく' },
    { text: '酔生夢死', read:'すいせいむし' },
    { text: '浅酌低唱', read:'せんしゃくていしょう' },
    { text: '同工異曲', read:'どうこういきょく' },
    { text: '意気投合', read:'いきとうごう' },
    { text: '莫逆之友', read:'ばくぎゃくのとも' },
    { text: '宋襄之仁', read:'そうじょうのじん' },
    { text: '恒産恒心', read:'こうさんこうしん' },
    { text: '前代未聞', read:'ぜんだいみもん' },
    { text: '不易流行', read:'ふえきりゅうこう' },
    { text: '墨突不黔', read:'ぼくとつふけん' },
    { text: '金声玉振', read:'きんせいぎょくしん' },
    { text: '片言隻語', read:'へんげんせきご' },
    { text: '一朝一夕', read:'いっちょういっせき' },
    { text: '一期一会', read:'いちごいちえ' }
   ];
}
