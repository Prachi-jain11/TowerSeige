class Block{
    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':0.8,
            'density':1.0,
            'stiffness' : 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        

        if(this.body.speed < 3){
          var pos = this.body.position;
          var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(7);
        fill ("red");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
     push();
     this.visiblity = this.visiblity - 5;
     //tint(255,this.Visiblity);
     //rect(pos.x, pos.y, this.width, this.height);
     pop();
        }
      }

      score(){
        if(this.visibility<0 && this.visibility>-105){
          score++;
        }
      }
}