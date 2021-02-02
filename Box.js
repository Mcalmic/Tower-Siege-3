class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.hasScored = false;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.isVisible = true;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        rectMode(CENTER);
        if(this.isVisible === true){
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
        }
      } else {
        this.isVisible = false;
      } 
    }
    score(){

      if(this.isVisible === false && this.hasScored === false){

        score = score + 50;
        this.hasScored = true;

      }

    }
}