class hexagon {
	constructor(x, y, s, id) {
		this.x = x;
		this.y = y;
		this.s = s;
		this.id = id;

		this.a = createVector(this.x, this.y - this.s);
		this.b = createVector(this.x + this.s, this.y - this.s/2);
		this.c = createVector(this.x + this.s, this.y + this.s/2);
		this.d = createVector(this.x, this.y + this.s);
		this.e = createVector(this.x - this.s, this.y + this.s/2);
		this.f = createVector(this.x - this.s, this.y - this.s/2);
	}
	display() {
		if (this.id == 0) {
			fill(40, 50, 180)
		} else if (this.id == 1) {
			fill(40, 170, 50)
		}
		stroke(20, 50);
		beginShape();
		vertex(this.a.x, this.a.y);
		vertex(this.b.x, this.b.y);
		vertex(this.c.x, this.c.y);
		vertex(this.d.x, this.d.y);
		vertex(this.e.x, this.e.y);
		vertex(this.f.x, this.f.y);
		endShape(CLOSE);
	}
}