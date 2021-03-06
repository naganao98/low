var Walkure_List = new Map();

var Walkure = function(name){
  this.name = name;
};
Walkure.prototype = {
  name : "",
  skill_name:  "",
  skill_type:  "p",
  rare : "c",
  atk:   0,
  skl:   0,
  c:     0,
  b:     0,
  s:     0,
  elem: null,
  atack: function(target){
    let s = false, c = false;
    let dm = 0;
    let def = this.skill_type == "p" ? target.p_def : target.m_def;
    s = mt.nextInt(0,99) < this.s;
    c = mt.nextInt(0,99) < this.c;
    dm =  s ? this.skl : this.atk;
    dm *= (this.elem.type == target.elem.weak) ? ( 1 + this.elem.value / 100 ) : 1;
    dm = this.b > 0 ? mt.nextInt(dm*(1-this.b/100),dm*(1+this.b/100)) : dm;
    dm -= def * !c;
    dm = dm > 0 ? dm : 0;
    return new BLog( this, target, s, c, dm)
  },
  set: function(type, atk, skl, c, b, s, e_type="", e_value=50){
    [this.skill_type, this.atk, this.skl, this.c, this.b, this.s] =
        Array.prototype.slice.call(arguments);
    this.elem = new EquipElement( e_type, e_value );
  }
};

function setWal( name, type, atk, skl, c, b, s, e_type, e_value) {
  let wal = new Walkure(name);
  wal.set(type, atk, skl, c, b, s, e_type, e_value);
  if ( !Walkure_List.has(name) ) Walkure_List.set(name, wal);
}

setWal("マイルドショコラ", "m", 7777, 111111, 28, 8, 25, "風");
setWal("真・焔", "m", 12827, 100591, 8, 16, 26, "火");
setWal("パズル乙女のここ", "m", 14304, 88205, 19, 0, 22, "水");

setWal("神戦乙女ナヴィ", "p", 26736, 53495, 30, 5, 32, "地");
setWal("大魔神女ピコ", "m", 27602, 42617, 20, 8, 53, "水");
setWal("神獣九尾狐", "m", 3225, 96774, 8, 12, 35, "火");
setWal("闇夜の神カミーラ", "p", 3892, 76118, 34, 8, 43, "風");


setWal("努力家ティターン", "m", 34041, 52703, 35, 11, 35, "地", 60);
setWal("超電磁ガイア", "p", 38343, 52616, 30, 12, 31, "地");

setWal("弾撃ジャスティン", "m", 35220, 56313, 36, 15, 34, "水", 65);
setWal("ロボ奏者アリエス", "p", 21786, 90816, 6, 4, 32, "水");
setWal("練乳せいりゅう", "p", 38574, 50876, 20, 13, 33, "水", 60);

setWal("赤星の九尾狐", "m", 33723, 52490, 42, 3, 32, "火", 60);
setWal("闘拳王女レオーナ", "p", 36137, 60786, 40, 10, 36, "火", 65);

setWal("純情☆エンジェル", "m", 37774, 47362, 30, 13, 35, "風", 60);
setWal("降臨☆エンジェル", "m", 36063, 53381, 15, 11, 44, "風");


// ハプニング
setWal("可憐舞嬢メイヨウ", "p", 19189, 69365, 8, 6, 50, "地");
setWal("絶対独占ポリン", "m", 37484, 54977, 35, 11, 44, "地", 65);

setWal("充足の凍牙ハルナ", "p", 43177, 47102, 9, 5, 37, "水");
setWal("呑気な骸メイラ", "m", 35969, 63747, 10, 22, 29, "水", 65);

setWal("恨み忘却レイラ", "p", 25319, 80628,  18, 10, 33, "火", 65);
setWal("油断大敵ビビ", "m", 41586	,45798, 30, 11, 43, "火");
setWal("聖尾の獣九尾狐", "m", 34555, 58039, 25, 10, 31, "火", 70);

setWal("碧髪の姫アデーレ", "m", 28454, 82255, 20, 18, 28, "風");
setWal("社の疾風葛葉", "p", 40539, 48516, 29, 13, 36, "風", 65);
setWal("不屈の姉エリーゼ", "p", 36672, 44645, 33, 12, 36, "風");
setWal("不覚の妹エミリィ", "m", 40539, 48516, 14, 5, 37, "風", 65);

// プチレジェ２
setWal("流星乙女ナヴィ", "p", 30622, 78431, 30, 6, 31, "地", 70);
setWal("あけおメイヨウ", "p", 13944, 96707, 12, 13, 35, "地");
setWal("新生★影乃騎士", "p", 38318, 50080, 32, 21, 45, "地");
setWal("盤上の策士ロニア", "m", 31567, 58517, 17, 7, 40, "地", 60);
setWal("烏珠の黒髪楓", "m", 21138, 61438, 16, 18, 48, "地");
setWal("廃墟の主ポリン", "m", 23279, 55078, 24, 6, 59, "地", 65);

setWal("水流乙女ナヴィ", "p", 30622, 78431, 30, 6, 31, "水", 70);
setWal("橙夜迷宮シャロ", "m", 28892, 63508, 30, 3, 37, "水", 65);
setWal("微酔の凍牙ハルナ", "p", 34658, 50846, 20, 18, 49, "水");
setWal("女盾神アイオーン", "m", 36487, 46755, 28, 13, 34, "水");
setWal("画伯セイレーン", "m", 28624, 71321, 30, 5, 31, "水");

setWal("烈火乙女ナヴィ", "p", 30622, 78431, 30, 6, 31, "火", 70);
setWal("奇術師パメラ", "p", 335871, 51956, 25, 10, 38, "火");
setWal("暁の魔女ファム", "m", 34414, 71047, 8, 19, 28, "火", 65);
setWal("惑心の君エリシア", "m", 33183, 59163, 13, 11, 36, "火", 65);
setWal("闘魂注入ハナ", "p", 37179, 47001, 8, 4, 37, "火", 65);
setWal("東風の振袖ラナ", "p", 10021, 78559, 32, 9, 46, "火", 60);

setWal("疾風乙女ナヴィ", "p", 30622, 78431, 30, 6, 31, "風", 70);
setWal("寝んこ正月メア", "m", 25158, 57048, 26, 8, 53, "風");
setWal("天空の魔女テレサ", "m", 21748, 85605, 13, 8, 33, "風");
setWal("闇刻王姫カミーラ", "p", 39076, 57161, 35, 14, 34, "風", 65);
setWal("慈しみ乙女フラウ", "p", 34356, 52684, 36, 5, 38, "風");

// ニューコス
setWal("龍神舞踏メイヨウ", "m", 35826, 64609, 6, 14, 30, "地", 55);
setWal("上機嫌ティターン", "p", 18949, 75246, 22, 5, 45, "地", 60);
setWal("機動戦姫デルタ", "p", 33699, 57833, 10, 5, 41, "地", 60);
setWal("ゆうしゃ影乃騎士", "p", 17535, 72707,  7, 17, 46, "地");

setWal("日向奏曲アリス", "p", 29199, 58696, 30, 18, 54, "水", 70);
setWal("寝床の天女雪奈", "m", 36835, 62024, 9, 17, 30, "水", 55);
setWal("戰賊ジャスティン", "m", 38304, 45260, 30, 6, 40, "水", 60);
setWal("創神パルヴァティ", "m", 24784, 65565,  13, 20, 45, "水");

setWal("狂食天使セラフ", "p", 22228, 85843, 29, 7, 34, "火", 60);
setWal("天神の巫女焔", "m", 36328, 69721, 5, 13, 25, "火", 55);
setWal("硬式の王女ハナ", "p", 36799, 52089, 35, 15, 33, "火");
setWal("創愛の姫エリシア", "m", 40300, 59039,  30, 15, 27, "火", 60);

setWal("藍翼の天刀千鶴", "p", 28042, 80711, 17, 9, 30, "風", 55);
setWal("招く猫メア", "m", 29155,  57899, 35, 3, 50, "風", 60);
setWal("電撃乙女エリカ", "m", 37518, 47908,  35, 18, 41, "風", 60);

// リゾ2015
setWal("海鮮巨匠ミズリィ", "p", 19344, 75914, 21, 7, 44, "地");
setWal("海辺遊びロニア", "m", 34551, 70347, 28, 3, 26, "地");

setWal("怪底調査シャロ", "m", 33214, 89604, 7, 16, 21, "水", 60);
setWal("打倒西瓜アリエス", "p", 29782, 65579, 11, 27, 42, "水");

setWal("獄上の美白ミカサ", "p", 25724, 69129, 16, 21, 44, "火");
setWal("紅蓮の申し子ビビ", "m", 39809, 55271, 33, 4, 23, "火");

setWal("海女ちゃん葛葉", "p", 40107, 57210, 15, 6, 28, "風", 60);
setWal("翠玉の妖精リア", "m", 27071, 85106, 34, 22, 28, "風");

setWal("太陽☆エンジェル", "m", 45165, 57996, 20, 11, 24, "風");
