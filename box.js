class Box{
    constructor(x,y,width,height){
        var options = {
            'friction': 1,
            'restitution': 0.01,
            'density': 2
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
            var pos = this.body.position;
            rectMode(CENTER);        
            fill("lightBlue");
            rect(pos.x, pos.y, this.width, this.height);
        }
        else {
            push();
            this.Visiblity = this.Visiblity -5;
            pop();
            World.remove(world, this.body);
        }
    }
    score(){
        if(this.Visiblity <0 && this.Visiblity> -105){ 
            score++;
        }
    }
}