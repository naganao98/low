var d = document;
var s = d.createElement("script");
s.setAttribute("type", "application/javascript");
s.setAttribute("src", "http://homepage2.nifty.com/magicant/sjavascript/mt.js");
d.body.appendChild(s);

var mt = new MersenneTwister();
//alert(mt.nextInt(-10,10));

var k = {
  atk : 46000,
  def : 21000,
  pdef : 16000.
  c : 20,
  b : 10
};
var wal = [
{
  atk : 20000,
  skl : 58000,
  c : 30,
  b : 10,
  s : 38
},
{
  atk : 38000,
  skl : 50000,
  c : 42,
  b : 10,
  s : 6
},
{
  atk : 7000,
  skl : 78000,
  c : 7,
  b : 10,
  s : 30
}
];


var skl = 0;
var clt = 0;
for(let i = 0;i < 100000;i++){
  s = mt.nextInt(0,99) < wal.s;
  c = mt.nextInt(0,99) < wal.c;
  dm =  s ? wal.skl : wal.atk;
  dm = mt.nextInt(dm*(1-wal.b/100),dm*(1+wal.b/100));
  dm -= k.def * !c;
  dm = dm > 0 ? dm : 0;
//  console.log((s?"skl:":"")+(c?"clt:":"")+dm);
  if (s) skl++;
  if (c) clt++;
}
console.log("skl:"+skl+",clt:"+clt);
