class Ball{
    constructor(x,y,){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30;
        World.add(world, this.body);
      }
      display(){
        push();
        var pos = this.body.position;
        //translate(pos.x, pos.y);
        ellipse( pos.x, pos.y, this.r);
        pop();

      }
}
