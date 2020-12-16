class Sides{
    constructor(x,y,width,height){
       var options={
           'restitution':0,
           'friction':15,
           'density':1.0
       }
       this.Body=bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;

       World.add(world,this.body);
    }
   display(){
       
       rect(0,0, this.width, this.height);
   }
}