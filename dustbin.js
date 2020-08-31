class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.dustbinImage=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
        image(this.dustbinImage,575,280,155,155);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };