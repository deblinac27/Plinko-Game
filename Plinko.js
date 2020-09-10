class Plinko{
    constructor(x, y, radius){
        var options={
          isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = 12;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}