class Fly {

    constructor(bodyA,pointB){
   
       var options = {
   
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 1,
          length : 300
   
       }
   
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
   
    }
   
       display(){
   
    var pointa = this.fly.bodyA.position;
    var pointb = this.pointB;
   
     push();
     strokeWeight(0);
     line(pointb.x,pointb.y,pointa.x,pointa.y);
     pop();
   
       }
   
   }