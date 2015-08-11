// set MersseneTwister.js
/**
if ( typeof MersenneTwister != "function"){
  let d = document;
  let s = d.createElement("script");
  s.setAttribute("type", "application/javascript");
  s.setAttribute("src", "http://homepage2.nifty.com/magicant/sjavascript/mt.js");
  d.body.appendChild(s);
}
**/
var mt = new MersenneTwister();

var BLog = function(atk, tgt, s, c, dm){
  [
    this.atacker,
    this.target,
    this.s,
    this.c,
    this.dm
  ] = Array.prototype.slice.call(arguments);
};
BLog.prototype = {
  atacker : null,
  target  : null,
  s       : false,
  c       : false,
  dm      : 0
};

var Knight = function(name){
  this.name = name;
};
Knight.prototype = {
  name : "",
  wep_type:  "p",
  atk:   0,
  def:   0,
  mdef:  0,
  c:     0,
  b:     0,
  atack: function(target){
    let c = false;
    let dm = 0;
    let def = this.wep_type == "p" ? target.def : target.mdef;
    c = mt.nextInt(0,99) < this.c;
    dm = mt.nextInt(this.atk*(1-this.b/100),this.atk*(1+this.b/100));
    dm -= def * !c;
    dm = dm > 0 ? dm : 0;
    return new BLog( this, target, false, c, dm)
  },
  set: function(atk, def, mdef, c, b){
    [this.atk, this.def, this.mdef, this.c, this.b] =
      Array.prototype.slice.call(arguments);
  }
};

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
  atack: function(target){
    let s = false, c = false;
    let dm = 0;
    let def = this.skill_type == "p" ? target.def : target.mdef;
    s = mt.nextInt(0,99) < this.s;
    c = mt.nextInt(0,99) < ( this.c > 50 ? 50 : this.c );
    dm =  s ? this.skl : this.atk;
    dm = mt.nextInt(dm*(1-this.b/100),dm*(1+this.b/100));
    dm -= def * !c;
    dm = dm > 0 ? dm : 0;
    return new BLog( this, target, s, c, dm)
  },
  set: function(atk, skl, c, b, s){
    [this.atk, this.skl, this.c, this.b, this.s] =
      Array.prototype.slice.call(arguments);
  }
};

var Deck = function(knight){
  this.knight = knight;
}
Deck.prototype = {
  knight: null,
  walkure: [],
  set : function(){
      Array.prototype.slice.call(arguments).forEach((card)=>{
      if ( this.walkure.length == 3 ) this.walkure.shift();
      this.walkure.push(card);
    });
  },
  remove : function( card ) {
    let idx = this.walkure.indexOf(card);
    if (idx >= 0) {
      this.walkure.splice(idx, 1);
    }
  }
}

var Battle = function(deck1, deck2){
  this.player = deck1;
  this.com    = deck2;
}
Battle.prototype = {
  player: null,
  com:    null,
  log: [],
  battle: function(){
    this.log = [];
    this.log.push(atacks(this.player, this.com));
    this.log.push(atacks(this.com, this.player));

    function atacks(atk, def) {
      var log = [];
      log.push(atk.knight.atack(def.knight));
      log.push(atk.knight.atack(def.knight));
      log.push(atk.knight.atack(def.knight));
//      loop(()=>{this.log.push(atk.knight.attack(def.knight))})(3);

      atk.walkure.forEach( (wal)=>{
        log.push(wal.atack(def.knight));
        log.push(wal.atack(def.knight));
      });
      return log;
    }

  },
  getResult : function(){
    return this.log;
  }
}

function loop(f){
  return function(cnt) {
    while(cnt--){f()};
  };
}

function definePrototype(o1, o2){
  for (key in o2) {
    o1[key] = o2[key];
  }
}

var k1 = new Knight("test1");
var k2 = new Knight("test2");
k1.set(46000, 20000, 20000, 10, 5);
k2.set(60000, 15000, 15000, 10, 5);

var wal1 = new Walkure("ラナ");
var wal2 = new Walkure("アリス");
var wal3 = new Walkure("セラフ");
wal1.set(20000, 50000, 37, 8, 40);
wal2.set(32000, 48000, 12, 5, 35);
wal3.set(7000, 82000, 5, 10, 25);

var d1 = new Deck(k1);
var d2 = new Deck(k2);
d1.set(wal1, wal2, wal2);
d2.set(wal1, wal2, wal2);


var btl = new Battle(d1, d2);
var win_cnt = 0;
var btl_cnt = 1000;
for (let i = 0; i < btl_cnt; i++) {
  btl.battle();
  let result = btl.getResult().map((e)=>{return e.reduce((p,c)=>p+c.dm, 0)});
  if (result[0] > result[1]) win_cnt++;
}
console.log(win_cnt*100/btl_cnt + "%");
//console.log(btl.getResult().map((e)=>{return e.reduce((p,c)=>p+c.dm, 0)}));
//console.log(btl.getResult()[0][0].dm);
