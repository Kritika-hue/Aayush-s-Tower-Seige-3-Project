class Stone{
    constructor(x,y,width,height){
        var options = {
            'friction': 0.1,
            'restitution': 0.3,
            'density': 30
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("polygon.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}