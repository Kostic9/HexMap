
var xoff = 0, yoff = 0;
//H is the height of equilateral triangles that hexagons consist of. H * 2 is the total width of the hexagon
var H = 15;
//delta_y is the vertical distance beetween adjacent rows
var delta_y = H * (2 - Math.sqrt(4/3 - 1));
var tiles = [];

function setup() {
	createCan(40, 30);
	DrawMap(40, 31);
}

function DrawMap(a, b) {
	//draw a map that is a x b hexagons large
	noiseDetail(3);
	//generate a two dimensional array of hexagon objects. every other row is going to have an extra hexagon and an indent
	for (var j = 0; j <= b; j++) {
		var indent = j % 2 == 1 ? H : 0;
		xoff = 0;
		temp = [];
		for (var i = 0; i <= a + indent; i++) {
			var id = noise(xoff, yoff) > 0.5 ? 0 : 1;
			var color = Math.abs(noise(xoff, yoff) - 0.5);
			var p = new hexagon((i * H * 2 + H) - indent, j * (delta_y), H, id);
			temp.push(p);
			xoff += 0.1;
		}
		yoff += 0.1;
		tiles.push(temp);
	}
	//display the array of hexagon objects
	for (var j = 0; j < tiles.length; j++) {
		for (var i = 0; i < tiles[j].length; i++) {
			tiles[j][i].display();
		}
	}
}

function createCan(a, b) {
	//a is the number of hexagons in a row. take that number and multiply it by the size of a hexagon (which is H * 2) to get the apropriate canvas width
	//b is the number of hexagons in a column. take that number and multiply it by delta_y (vertical distance beetween hexagons) to get the apropriate canvas height
	can = createCanvas(a * 2 * H, b * delta_y);
	can.parent("mapdiv");
	//getElementById("mapdiv").setAttribute("style", "1200px");

}

function ChangeText() {
	var a = 40;
	var b = 30;
	//create canvas with the apropriate size
	createCan(a, b);
	//increase b by 1 because the first row is only half-visible, so we ad another on the bottom that is also half-visible
	DrawMap(a, b + 1);
}
