var Equipment_List = {
	right: new Map(),
	left: new Map(),
	body: new Map(),
	necklace: new Map(),
	ring: new Map()
};

var EquipmentException = function(message){
	this.name = "EquipmentException";
	this.message= message;
}
EquipmentException.prototype = new Error();
EquipmentException.constructor = EquipmentException;

var EquipElement = function( type, value, weak ) {
    var elems = ["地", "水", "火", "風"];
    if ( elems.indexOf(type) > 0 ) {
        [this.type, this.value, this.weak] = [type, value, weak || getWeakness(type)];
    } else {
        [this.type, this.value, this.weak] = ["無", 0, ""];
    }
    function getWeakness(type){
        return elems.slice(-1).concat(elems.slice(0,-1))[elems.indexOf(type)] || "";
    }
}
EquipElement.prototype = {
    type : "無",
    value: 0,
    weak: "",
	toString: function() {
		var ret = this.type;
		if ( this.value > 0 ) ret += this.value;
		return ret;
	}
}

var Equipment = function() {
};
Equipment.prototype = {
	right: null,
	left: null,
	body: null,
	necklace: null,
	ring: null,
	getStatus: function() {
		let part_scale = {
			right:      { p_atk:0.05, m_atk:0.05, p_def:0, m_def:0, b :0, c :0},
			left :       { p_atk:0, m_atk:0, p_def:0.02, m_def:0.03, b :0, c :0},
			body :      { p_atk:0, m_atk:0, p_def:0.05, m_def:0.02, b :0, c :0},
			ring  :      { p_atk:0.05, m_atk:0.05, p_def:0.05, m_def:0.05, b :0, c :0},
			necklace: { p_atk:0.05, m_atk:0.05, p_def:0.05, m_def:0.05, b :0, c :0},
		}
		let parts = ["right", "left", "body", "necklace", "ring"];
		let w_type = "p";
		let stat = { p_atk:10, m_atk:10, p_def:10, m_def:10,  c:10, b:5};
		let elem = { "地":0, "水":0, "火":0, "風":0 }
		parts.forEach( (part) => {
			if ( !this[part] ) return;
			let equip = Equipment_List[part].get(this[part].name);
			if ( part === "right" )  w_type = equip.type;
			if ( equip.elem.type in elem ) elem[equip.elem.type] += equip.elem.value;
			for ( let prop in stat ) {
				let scale = part_scale[part][prop];
				if ( equip.type === "m" ) {
						if ( prop === "p_def" ) {
							scale = part_scale[part].m_def;
						} else if ( prop === "m_def" ) {
							scale = part_scale[part].p_def;
						}
				}
				stat[prop] += Math.floor(equip[prop] * ( 1 + scale * this[part].value ));
			}
		});
		let max_elem = {type: "", value:0 };
		for ( let key in elem ) {
			if (elem[key] > max_elem.value) {
				max_elem = { type: key, value: elem[key] }
			}
		}
		return [w_type]
						.concat(Object.keys(stat).map((key)=>stat[key]))
						.concat(new EquipElement(max_elem.type, max_elem.value));
	},
	set: function( part, name, value ) {
		if ( name !== "" && ! Equipment_List[part].has( name ) ) {
			throw new EquipmentException( name + "is not " + part + " item." );
		}
		this[part] = name ? { name: name, value: value } : null;
		return this;
	},
	clone : function() {
		var cl = new Equipment();
		for ( key in cl ) {
			cl[key] = this[key];
		}
		return cl;
	}
}
Object.defineProperty( Equipment.prototype, "getStatus", {enumerable: false } );
Object.defineProperty( Equipment.prototype, "set", {enumerable: false } );
Object.defineProperty( Equipment.prototype, "clone", {enumerable: false } );


function addEquipList( part, name, type, p_atk, m_atk, p_def, m_def, c, b, e_type="", e_value=0 ){
  let stat = {
    type: type,
    p_atk: p_atk, m_atk: m_atk,
    p_def: p_def, m_def: m_def,
    c: c, b: b, elem: new EquipElement( e_type, e_value )
  };
  if ( !Equipment_List[part].has(name) )
      Equipment_List[part].set(name, stat);
}
addEquipList("right", "レーヴァテイン", "p", 13000, 0, 0, 0, 10, 5);
addEquipList("right", "ラグ・ナ・ロク", "m", 0, 13000, 0, 0, 10, 5);
addEquipList("right", "機兵光波薙刀", "p", 12500, 0, 500, 500, 0, 10);
addEquipList("right", "魔導機瞬速消滅砲", "m", 0, 12500, 500, 500, 0, 10);
addEquipList("right", "閻魔剣ダインレイ", "p", 15000, 0, 0, 0, 20, 7);
addEquipList("right", "極神槍フリーレン", "m", 0, 15000, 0, 0, 20, 7);
addEquipList("right", "湧け草の剣", "p", 12000, 0, 1500, 0, 5, 5);
addEquipList("right", "コノハナの杖", "m", 0, 12000, 0, 1500, 5, 5);

addEquipList("right", "アダマンソード", "p", 6500, 0, 1500, 0, 20, 5);
addEquipList("right", "アダマンロッド", "m", 0, 6500, 0, 1500, 20, 5);
addEquipList("right", "閃神ノ星剣", "p", 12000, 0, -1000, 0, 8, 10);
addEquipList("right", "光神杖ホーリィ", "m", 0, 12000, 0, -1000, 8, 10);
addEquipList("right", "邪剣ジャスティア", "p", 10500, 0, -600, 0, 20, 5);
addEquipList("right", "聖杖ヴァルナ", "m", 10500, 0, -600, 0, 20, 5);
addEquipList("right", "スピラルソード", "p", 9500, 0, 1000, 1000, 45, 15);
addEquipList("right", "更夜の錫杖", "m", 0, 9500, 1000, 1000, 45, 15);


addEquipList("left", "煉獄王之暗盾", "p", 0, 0, 2500, 2000, 0, 0);
addEquipList("left", "魔転移反動砲", "p", 1200, 0, 1500, 2250, 0, 0);
addEquipList("left", "念動量子兵器", "m", 0, 1200, 2250, 1500, 0, 0);
addEquipList("left", "邪鋼アースティア", "p", 2250, 0, 800, 1500, 0, 0);
addEquipList("left", "聖芒ヴェーダ", "m", 0, 2250, 1050, 800, 0, 0);
addEquipList("left", "更夜の断盾", "p", 1400, 0, 800, 1250, 5, 0);
addEquipList("left", "ルーダースピラル", "m", 0, 1400, 1250, 800, 5, 0);
addEquipList("left", "閻魔皇スリロス", "p", 1600, 0, 1000, 1750, 5, 0);
addEquipList("left", "極神晶アウディー", "m", 0, 1600, 1750, 1000, 5, 0);
addEquipList("left", "湧け草の盾", "p", 5000, 0, 1000, 1500, 0, 0);
addEquipList("left", "コノハナの腕輪", "m", 0, 5000, 1500, 1000, 0, 0);

addEquipList("left", "アダマンシールド", "p", 0, 0, 1250, 1250, 0, 0);
addEquipList("left", "アダマンの結晶", "m", 0, 0, 1250, 1250, 0, 0);
addEquipList("left", "閃王ノ宝盾", "p", 1500, 0, 650, 1350, 3, 0);
addEquipList("left", "光王晶モメント", "m", 0, 1500, 1350, 650, 3, 0);
addEquipList("left", "天之尾羽張", "p", 0, 0, 750, 1550, 0, 0);
addEquipList("left", "ダークマター", "m", 0, 0, 1550, 750, 0, 0);
addEquipList("left", "フレンドアーチャー", "p", 1000, 0, 450, 1450, 0, 0);
addEquipList("left", "フレンドボム", "m", 0, 1000, 1450, 450, 0, 0);

addEquipList("left", "わんこ三兄弟", "p", 3000, 0, 500, 750, 2, 0);
addEquipList("left", "にゃんこ三兄弟", "m", 0, 3000, 570, 500, 2, 0);


addEquipList("body", "邪鎧アガスティア", "p", 1250, 0, 4100, 2500, 0, 0);
addEquipList("body", "聖衣ヴァルミラ", "m", 0, 1250, 2500, 4100, 0, 0);
addEquipList("body", "翼鎧フラジィル", "p", 1000, 0, 3500, 3000, 0, 0);
addEquipList("body", "スピラルネイト", "m", 0, 1000, 3000, 3500, 0, 0);
addEquipList("body", "弐式機兵・飛燕", "p", 4000, 0, 3000, 2000, 5, 0);
addEquipList("body", "全浮遊型機兵", "m", 0, 4000, 2000, 3000, 5, 0);
addEquipList("body", "閻魔鎧アルティマ", "p", 0, 0, 4500, 3000, 10, 0);
addEquipList("body", "極神帝スプリーム", "m", 0, 0, 3000, 4500, 10, 0);
addEquipList("body", "湧け草の鎧", "p", 4000, 0, 5000, 0, 0, 0);
addEquipList("body", "コノハナの軽鎧 ", "m", 0, 4000, 0, 5000, 0, 0);

addEquipList("body", "アダマンアーマー", "p", 2500, 0, 2500, 1500, 0, 0);
addEquipList("body", "アダマンローブ", "m", 0, 2500, 1500, 2500, 0, 0);
addEquipList("body", "閃帝ノ大鎧", "p", 1000, 0, 3250, 1750, 5, 0);
addEquipList("body", "光帝衣プリーモ ", "m", 0, 1000, 1750, 3250, 5, 0);
addEquipList("body", "天照之鎧", "p", 1500, 0, 3000, 2500, 0, 0);
addEquipList("body", "神の冥衣", "m", 0, 1500, 2500, 3000, 0, 0);
addEquipList("body", "ブレイブ-剛装-", "p", 0, 0, 4000, 2850, 0, 0);
addEquipList("body", "ウィザード-袍装-", "m", 0, 0, 2850, 4000, 0, 0);

addEquipList("ring", "輪廻の指輪", "p", 8500, 8500, 0, 0, 5, 0);
addEquipList("ring", "前世の指輪", "p", 8500, 8500, 1000, 1000, 5, 0);
addEquipList("ring", "苦界の指輪", "p", 9000, 9000, 1000, 1000, 6, 0);
addEquipList("ring", "転生のリング", "p", 2000, 2000, 3000, 3000, 0, 0);

addEquipList("ring", "剛壁の指輪", "p", 500, 500, 4250, 4250, 3, 0);
addEquipList("ring", "絶壁の指輪", "p", 500, 500, 3750, 3750, 3, 0);
addEquipList("ring", "厳壁の指輪", "p", 0, 0, 4000, 4000, 0, 0);
addEquipList("ring", "鋼壁の指輪", "p", 0, 0, 3500, 3500, 0, 0);

addEquipList("necklace", "軍神の首飾り", "p", 2500, 2500, 1300, 1300, 0, 0);
addEquipList("necklace", "輪廻の首飾り", "p", 5000, 5000, 2000, 2000, 0, 0);
addEquipList("necklace", "前世の首飾り", "p", 5500, 5500, 2000, 2000, 0, 0);
addEquipList("necklace", "縛神の首飾り", "p", 6000, 6000, 2000, 2000, 0, 0);
addEquipList("necklace", "転生の首輪", "p", 0, 0, 3750, 3750, 0, 0);

addEquipList("necklace", "戦神の首飾り", "p", 3750, 3750, 850, 850, 0, 0);
addEquipList("necklace", "天授の首飾り", "p", 3750, 3750, 1000, 1000, 2, 0);
addEquipList("necklace", "闘神の首飾り", "p", 4000, 4000, 1250, 1250, 3, 0);


addEquipList("left", "マグナシールド", "p", 0, 0, 300, 650, 0, 0, "地", 75);
addEquipList("left", "フラッドシールド", "p", 0, 0, 350, 700, 0, 0, "水", 75);
addEquipList("left", "ブレイズシールド", "p", 100, 100, 300, 650, 0, 0, "火", 75);
addEquipList("left", "ボレアスシールド", "p", 50, 50, 300, 650, 0, 0, "風", 75);
addEquipList("left", "コロナシールド", "p", 750, 0, 500, 900, 0, 0, "火", 80);

addEquipList("left", "マグナチェーン", "m", 0, 0, 650, 300, 0, 0, "地", 75);
addEquipList("left", "フラッドチェーン", "m", 0, 0, 700, 350, 0, 0, "水", 75);
addEquipList("left", "ブレイズチェーン", "m", 100, 100, 650, 300, 0, 0, "火", 75);
addEquipList("left", "ボレアスチェーン", "m", 50, 50, 650, 300, 0, 0, "風", 75);
addEquipList("left", "オーシャンシールド", "m", 0, 750, 900, 500, 0, 0, "水", 80);

addEquipList("left", "練成紋「アス」", "m", 0, 500, 350, 350, 0, 0, "地", 50);
addEquipList("left", "練成紋「水零」", "m", 0, 500, 350, 350, 0, 0, "水", 50);
addEquipList("left", "練成紋「焔」", "m", 0, 500, 350, 350, 0, 0, "火", 50);
addEquipList("left", "練成紋「エア」", "m", 0, 500, 350, 350, 0, 0, "風", 50);

addEquipList("body", "マグナメイル", "p", 0, 0, 1500, 900, 0, 0, "地", 75);
addEquipList("body", "フラッドメイル", "p", 0, 0, 1700, 1000, 0, 0, "水", 75);
addEquipList("body", "ブレイズメイル", "p", 200, 200, 1500, 900, 0, 0, "火", 75);
addEquipList("body", "ボレアスメイル", "p", 50, 50, 1500, 900, 0, 0, "風", 75);
addEquipList("body", "海神セーラー", "p", 500, 0, 1500, 1250, 0, 0, "水", 80);

addEquipList("body", "マグナローブ", "m", 0, 0, 900, 1500, 0, 0, "地", 75);
addEquipList("body", "フラッドローブ", "m", 0, 0, 1000, 1700, 0, 0, "水", 75);
addEquipList("body", "ブレイズローブ", "m", 200, 200, 900, 1500, 0, 0, "火", 75);
addEquipList("body", "ボレアスローブ", "m", 50, 50, 900, 1500, 0, 0, "風", 75);
addEquipList("body", "レヴァイア法衣", "m", 0, 500, 1250, 1500, 0, 0, "水", 80);

addEquipList("body", "塊土鎧-アス-", "p", 0, 0, 2000, 2000, 0, 0, "地", 90);
addEquipList("body", "塊土鎧-水零-", "p", 0, 0, 2000, 2000, 0, 0, "水", 90);
addEquipList("body", "塊土鎧-焔-", "p", 0, 0, 2000, 2000, 0, 0, "火", 90);
addEquipList("body", "塊土鎧-エア-", "p", 0, 0, 2000, 2000, 0, 0, "風", 90);

addEquipList("ring", "天照大神の指輪", "p", 5000, 5000, -1500, -1500, 0, 0, "火", 60);
addEquipList("ring", "地女神の指輪", "p", 2750, 0, 600, 300, 0, 0, "地", 45);
addEquipList("ring", "オクトスリング", "p", 0, 2750, 300, 600, 0, 0, "地", 45);
addEquipList("ring", "氷女神の指輪", "p", 2750, 0, 600, 300, 0, 0, "水", 45);
addEquipList("ring", "ヒュドールリング", "p", 0, 2750, 300, 600, 0, 0, "水", 45);
addEquipList("ring", "炎女神の指輪", "p", 2750, 0, 600, 300, 0, 0, "火", 45);
addEquipList("ring", "ピュールリング", "p", 0, 2750, 300, 600, 0, 0, "火", 45);
addEquipList("ring", "嵐女神の指輪", "p", 2750, 0, 600, 300, 0, 0, "風", 45);
addEquipList("ring", "アネモスリング", "p", 0, 2750, 300, 600, 0, 0, "風", 45);

addEquipList("necklace", "天照大神の首飾り", "p", 5000, 5000, -1500, -1500, 0, 0, "火", 60);
addEquipList("necklace", "土龍の首飾り", "p", 1000, 1000, 600, 600, 0, 0, "地", 50);
addEquipList("necklace", "氷龍の首飾り", "p", 1000, 1000, 600, 600, 0, 0, "水", 50);
addEquipList("necklace", "炎龍の首飾り", "p", 1000, 1000, 600, 600, 0, 0, "火", 50);
addEquipList("necklace", "嵐龍の首飾り", "p", 1000, 1000, 600, 600, 0, 0, "風", 50);
