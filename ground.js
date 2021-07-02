class Ground 
{
  constructor(x, y, w, h) 
  {
    var ground_options = {
      isStatic:true,
      restitution: -5
    };
    
    this.body = Bodies.rectangle(x, y, w, h, ground_options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


