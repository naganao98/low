var k1 = new Knight("test1");
k1.setEquipment("right", "レーヴァテイン", 34);
k1.setEquipment("left", "アダマンシールド", 33);
k1.setEquipment("body", "閃帝ノ大鎧", 33);
k1.setEquipment("ring", "剛壁の指輪", 11);
k1.setEquipment("necklace", "輪廻の首飾り", 12);

var k2 = new Knight("test2");
k2.setEquipment("right", "ラグ・ナ・ロク", 32);
k2.setEquipment("left", "コノハナの腕輪", 24);
k2.setEquipment("body", "邪鎧アガスティア", 31);
k2.setEquipment("ring", "厳壁の指輪", 10);
k2.setEquipment("necklace", "輪廻の首飾り", 12);


var k3 = new Knight("test3");
k3.setEquipment("right", "レーヴァテイン", 35);
k3.setEquipment("left", "邪鋼アースティア", 29);
k3.setEquipment("body", "邪鎧アガスティア", 34);
k3.setEquipment("ring", "輪廻の指輪", 11);
k3.setEquipment("necklace", "戦神の首飾り", 9);

var k4 = new Knight("わんこ");
k4.setEquipment("right", "極神槍フリーレン", 39);
k4.setEquipment("left", "にゃんこ三兄弟", 26);
k4.setEquipment("body", "極神帝スプリーム", 33);
k4.setEquipment("ring", "前世の指輪", 12);
k4.setEquipment("necklace", "前世の首飾り", 11);

var k4 = new Knight("わんこ");
k4.setEquipment("right", "極神槍フリーレン", 34);
k4.setEquipment("left", "聖芒ヴェーダ", 30);
k4.setEquipment("body", "聖衣ヴァルミラ", 31);
k4.setEquipment("ring", "輪廻の指輪", 13);
k4.setEquipment("necklace", "輪廻の首飾り", 12);

var k5 = new Knight("test5");
k5.setEquipment("right", "ラグ・ナ・ロク", 34);
k5.setEquipment("left", "念動量子兵器", 31);
k5.setEquipment("body", "聖衣ヴァルミラ", 34);
k5.setEquipment("ring", "厳壁の指輪", 12);
k5.setEquipment("necklace", "転生の首輪", 10);

var k6 = new Knight("test6");
k6.setEquipment("right", "閃神ノ星剣", 31);
k6.setEquipment("left", "邪鋼アースティア", 26);
k6.setEquipment("body", "翼鎧フラジィル", 31);
k6.setEquipment("ring", "鋼壁の指輪", 9);
k6.setEquipment("necklace", "軍神の首飾り", 10);

var k7 = new Knight("test7");
k7.setEquipment("right", "ラグ・ナ・ロク", 34);
k7.setEquipment("left", "念動量子兵器", 32);
k7.setEquipment("body", "弐式機兵・飛燕", 34);
k7.setEquipment("ring", "厳壁の指輪", 10);
k7.setEquipment("necklace", "輪廻の首飾り", 11);

var k8 = new Knight("test8");
k8.setEquipment("right", "閻魔剣ダインレイ", 39);
k8.setEquipment("left", "魔転移反動砲", 32);
k8.setEquipment("body", "閻魔鎧アルティマ", 39);
//k8.setEquipment("ring", "剛壁の指輪", 13);
k8.setEquipment("ring", "前世の指輪", 12);
k8.setEquipment("necklace", "前世の首飾り", 12);
//k8.setEquipment("necklace", "輪廻の首飾り", 13);

var k9 = new Knight("test9");
k9.setEquipment("right", "閻魔剣ダインレイ", 34);
k9.setEquipment("left", "閻魔皇スリロス", 27);
k9.setEquipment("body", "閻魔鎧アルティマ", 31);
//k9.setEquipment("ring", "剛壁の指輪", 13);
k9.setEquipment("ring", "輪廻の指輪", 12);
k9.setEquipment("necklace", "輪廻の首飾り", 13);

var k10 = new Knight("test10");
k10.setEquipment("right", "湧け草の剣", 39);
k10.setEquipment("left", "湧け草の盾", 32);
k10.setEquipment("body", "湧け草の鎧", 39);
//k10.setEquipment("ring", "剛壁の指輪", 13);
//k10.setEquipment("necklace", "転生の首輪", 13);
k10.setEquipment("ring", "前世の指輪", 12);
k10.setEquipment("necklace", "前世の首飾り", 12);

var k11 = new Knight("test11");
k11.setEquipment("right", "閻魔剣ダインレイ", 39);
k11.setEquipment("left", "コロナシールド", 20);
k11.setEquipment("body", "塊土鎧-焔-", 30);
//k11.setEquipment("ring", "天照大神の指輪", 7);
k11.setEquipment("ring", "苦界の指輪", 12);
k11.setEquipment("necklace", "天照大神の首飾り", 7);

var k12 = new Knight("test11");
k12.setEquipment("right", "閻魔剣ダインレイ", 40);
k12.setEquipment("left", "極神晶アウディー", 34);
k12.setEquipment("body", "閻魔鎧アルティマ", 39);
k12.setEquipment("ring", "苦界の指輪", 13);
k12.setEquipment("necklace", "縛神の首飾り", 13);


/**
console.log([k1.p_atk, k1.m_atk, k1.p_def, k1.m_def, k1.c, k1.b].join());
console.log([k2.p_atk, k2.m_atk, k2.p_def, k2.m_def, k2.c, k2.b].join());
console.log([k3.p_atk, k3.m_atk, k3.p_def, k3.m_def, k3.c, k3.b].join());
console.log([k4.p_atk, k4.m_atk, k4.p_def, k4.m_def, k4.c, k4.b].join());
console.log([k5.p_atk, k5.m_atk, k5.p_def, k5.m_def, k5.c, k5.b].join());
**/

var d1 = new Deck(k8);
var d2 = new Deck(k4);
d1.set("闘拳王女レオーナ", "太陽☆エンジェル", "水流乙女ナヴィ");
//d2.set("闘拳王女レオーナ", "太陽☆エンジェル", "水流乙女ナヴィ");
//d2.set("闘拳王女レオーナ", "弾撃ジャスティン", "超電磁ガイア");
//d2.set("闘拳王女レオーナ", "東風の振袖ラナ", "赤星の九尾狐");
//d2.set("電撃乙女エリカ", "上機嫌ティターン", "赤星の九尾狐");
//d2.set("流星乙女ナヴィ", "絶対独占ポリン", "闘拳王女レオーナ");
//d2.set("闘拳王女レオーナ", "闘拳王女レオーナ", "闘拳王女レオーナ");
d2.set("太陽☆エンジェル", "絶対独占ポリン", "赤星の九尾狐");

var btl = new Battle(d1, d2);


/**
var cnt = 10000;
var win = 0;

while(cnt--) {
  btl.battle();
  var result = btl.getResult();
  if ( result[0].reduce((p,c)=>p+c.dm, 0) > result[1].reduce((p,c)=>p+c.dm, 0) ) win++;
}
alert(win);
**/


//btl.battle();

window.addEventListener( "DOMContentLoaded", function(){
			var button1 = document.getElementById( "battle" );
			button1.addEventListener( "click", function(){ btl.battle(); display_result( btl.getResult() ); }, false );

			var button2 = document.getElementById( "ntimes" );
			button2.addEventListener( "click", battle_ntimes.bind(null, btl, 100),  false );

			display_status(btl.player, "#information > div.player1");
			display_status(btl.com, "#information > div.player2");
		},
		false );

function battle_ntimes( btl, num ) {
	var results = [];
	var count = 0;
	for( var i = 0; i < num; i++ ){
		btl.battle();
		results.push( btl.getResult() );
	}

	var box = document.getElementById( "summary" );
	box.innerHTML = "";
	var ul = document.createElement( "ul" );
	results.forEach( (r)=>{
		var li = document.createElement( "li" );
		if ( isP1Win( r ) ) {
			li.textContent = "○"
			count++;
		} else {
			li.textContent = "×"
		}
		li.addEventListener( "click", display_result.bind( null, r ), false );
		ul.appendChild( li );
	});
	box.appendChild( ul );

	var total = document.createElement( "div" );
	total.setAttribute( "id", "total" );
	total.textContent = count + " / " + num;
	box.appendChild( total );

	function isP1Win( result ) {
		return result[0].reduce((p,c)=>p+c.dm, 0) > result[1].reduce((p,c)=>p+c.dm, 0)
	}
}

function display_result( result ) {
	var d = document;
	var box1 = d.querySelector(".player1.result");
	var box2 = d.querySelector(".player2.result");

	box1.innerHTML = "";
	box2.innerHTML = "";

	[box1, box2].forEach((box, idx)=>{
		result[idx].forEach((e)=>{
		  let text = e.atacker.name + "の" + (e.s?"スキル！":"攻撃！")
		  + (e.c?"クリティカル！":"") + e.dm + "ダメージ！";
		  box.appendChild(d.createTextNode(text));
		  box.appendChild(d.createElement("br"));
		});
		box.appendChild(d.createTextNode("トータル：" + result[idx].reduce((p,c)=>p+c.dm, 0) + "ダメージ！"));
		box.appendChild(d.createElement("br"));
	});
}

function display_status(deck, box) {
	var d = document;
	var knight = deck.knight;

	var name  = d.querySelector( box + " > .name");
	name.textContent = knight.name;

/**
	stats(".p_atk").textContent = knight.p_atk;
	stats(".m_atk").textContent = knight.m_atk;
	stats(".p_def").textContent = knight.p_def;
	stats(".m_def").textContent = knight.m_def;
	stats(".critical").textContent = knight.c;
	stats(".balance").textContent = knight.b;
**/
	["p_atk", "m_atk", "p_def", "m_def", "c", "b", "elem"].forEach( (st)=>{
		stats(box, st, knight[st] );
	});

	["right", "left", "body", "ring", "necklace"].forEach( (eq)=>{
		if ( knight.equipment[eq] )
			equip(box, eq, knight.equipment[eq].name, knight.equipment[eq].value);
	} );

	wal.apply( null, [box].concat(deck.walkure));

	function stats(box, part, value){
		var st = d.querySelector( box + " > .status > ." + part + " + dd");
//		st.textContent = value instanceof EquipElement ? value.toString() : value;
		st.textContent = value;
	}

	function wal(box, ...wals){
		var wls = d.querySelectorAll( box + " > .walkure > .card");
		Array.apply([], wls).forEach( (w, idx)=>{
			w.textContent = wals[idx] ? wals[idx].name : "";
		});
	}

	function equip( box, part, name, value ){
		var eq = d.querySelector( box + " > .equipment > ." + part );
		eq.textContent = name + "+" + value;
	}

}

function display_walkure(deck, box) {

}
