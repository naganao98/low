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
  p_atk:   0,
  m_atk:   0,
  p_def:   0,
  m_def:  0,
  c:	0,
  b:	0,
  elem: null,
  equipment: null,
  setEquipment: function(part, name, value){
  	try {
  		if ( ! this.equipment ) this.equipment = new Equipment();
  		this.equipment.set(part, name, value);
        Knight.prototype.setStatus.apply( this, this.equipment.getStatus() );
  	} catch( err ) {
  		if ( err instanceof EquipmentException ) {
  			console.log( err.message );
  		} else {
  			throw err;
  		}
  	}
  },
  atack: function(target){
    let [atk, def] = this.wep_type == "p" ? [this.p_atk, target.p_def ] : [this.m_atk, target.m_def];
    atk *= (this.elem.type == target.elem.weak) ? ( 1 + this.elem.value / 100 ) : 1;
    let c = mt.nextInt(0,99) < this.c;
    let dm = this.b > 0 ? mt.nextInt(atk*(1-this.b/100),atk*(1+this.b/100)) : atk;
    dm -= def * !c;
    dm = dm > 0 ? dm : 0;
    return new BLog( this.clone(), target, false, c, dm)
  },
  setStatus: function(wep_type, p_atk, m_atk, p_def, m_def, c, b, elem){
    [this.wep_type, this.p_atk, this.m_atk, this.p_def, this.m_def, this.c, this.b, this.elem] =
      Array.prototype.slice.call(arguments);
  },
  clone: function() {
      var cp = new Knight(this.name);
      cp.equipment = this.equipment.clone();
      Knight.prototype.setStatus.apply( cp, cp.equipment.getStatus() );
      return cp;
  }
};

var Deck = function(knight){
  this.knight = knight;
  this.walkure = [];
}

Deck.prototype = {
  knight: null,
  walkure: null,
  set : function(){
    Array.prototype.slice.call(arguments).forEach((_card)=>{
      let card = _card;
      if ( Walkure_List.has( card ) ) card = Walkure_List.get(card);
      if ( card instanceof Knight ) {
      		this.knight = card;
      } else if ( card instanceof Walkure  ) {
	        if ( this.walkure.length == 3 ) this.walkure.shift();
    	    this.walkure.push(card);
      }
/**
      if ( this.walkure.length == 3 ) this.walkure.shift();
      this.walkure.push(card);
**/
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
  this.log      = [];
}
Battle.prototype = {
  player: null,
  com:    null,
  log: null,
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
  getLog : function(){
    return this.log;
  },
  getResult : function(){
	return this.log;
  }
}
