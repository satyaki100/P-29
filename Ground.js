class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      strokeWeight(15)
      stroke('rgb(32, 247, 42)')
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };
