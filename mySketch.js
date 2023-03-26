let _aryObject = [];
let _tileNumT;
let _count;
let _rRate;
let _rWidth;

function setup() {
  createCanvas(1112, 834);
  noFill();
  colorMode(HSB, 360, 100, 100, 255);
  strokeJoin(MITER);
  strokeCap(PROJECT);
  textSize(80);
  _freqCount = 1;

  _rRate = 2*PI/(60*random(1, 8));
  _count = 0;
  _ns = random(10);
  _tileNumT = int(random(2, 32))+1;
  _rWidth = random(1, 10)*width/20;
}

function draw() {
	translate(-300, 0);
  background(0);
  if (_count % _freqCount == 0) {
    let shapeMode = 1;
    let baseColor = 360 + random(720);
    _aryObject.unshift(new f(
      int(random(_tileNumT)),
      color((baseColor) % 360, 100, 100, 255),
      shapeMode
    ));
  }
  
  for (let i = _aryObject.length-1; i >= 0; i--) {
    _aryObject[i].update();
    _aryObject[i].drawMe();
    if (_aryObject[i].rAng > PI/1.7) {
      _aryObject.pop();
    }
  }

  _count ++;
}

class f {
  constructor(iT, myColor, shapeMode) {
    this.iT = iT;
    this.rAng = 0;
    this.stepT = 20;
    this.myColor = myColor;
    this.offsetT = random()*2*PI;
    this.shapeMode = shapeMode;
  }
  
  update() {
    this.rAng += _rRate;
  }

  drawMe() {
    push();
    translate(width/2, height/2);
    stroke(this.myColor);
    strokeWeight(width/45*(1-cos(this.rAng))**2);
    drawingContext.shadowBlur = width/3*(1-cos(this.rAng))**2;
    drawingContext.shadowColor = this.myColor;
    let r_internal = width/1.5 * (1-cos(this.rAng))**2;
    let r_external = (width/1.5 + _rWidth) * (1-cos(this.rAng))**2;
    for(let j = 0; j < 3; j++) {
			fill(0);
      text("Art Base .digital", 0, 0);
    }
    pop();
  }
}

function mouseReleased() {
	if (mouseX < width / 2){
    _rRate = 2*PI/(60*random(1, 8));
    _count = 0;
    _tileNumT = int(random(2, 32))+1;
    _rWidth = rWidth = random(1, 10)*width/20;
    _aryObject = [];
	} else {
    save('pix.jpg');
	}

}
	