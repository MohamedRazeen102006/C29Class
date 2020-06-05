class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.image = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        push();
        translate(210,20);
        image(this.image,0,0);
        image(this.image2,-28,-5);
        pop();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-5);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.image3,pointA.x-30,pointA.y-10,15,30);
            pop();
        }
    }
    
}
