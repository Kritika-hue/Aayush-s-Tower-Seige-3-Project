class Ball{
    constructor(x,y, radius){
        var options = {
            'friction': 1,
            'restitution': 0.01,
            'density': 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<5){
            var pos = this.body.position;
            rectMode(CENTER);
            fill("red");
            ellipse(pos.x, pos.y, this.radius);
        }
        else {
            push();
            this.visibility = this.visibility- 5;
            tint(255, this.Visibility);
            World.remove(world, this.body);
            pop();
    }
}
}