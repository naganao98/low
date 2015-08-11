var Status = function( type,  p_atk, m_atk, p_def, m_def, c, b ){
	[
		this.type,
		this.p_atk,
		this.m_atk,
		this.p_def,
		this.m_def,
		this.c,
		this.b
	] = Array.prototype.slice.call( arguments );
}

Status.prototype = {
	type: "p",
	p_atk: 0,
	m_atk: 0,
	p_def: 0,
	m_def: 0,
	c: 0,
	b: 0,
	add: function( stat ) {
	}
}

