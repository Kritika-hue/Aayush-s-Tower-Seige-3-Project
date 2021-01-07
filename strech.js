class Band {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.strech = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.strech);
    }
    attach(body){
        this.strech.bodyA = body;
    }
    fly(){
        this.strech.bodyA = null;
    }
    display(){
        if(this.strech.bodyA){
            var pointA = this.strech.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("red");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
}