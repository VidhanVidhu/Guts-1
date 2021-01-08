class Circle{
    constructor(x,y,radius){
    
        this.body=Bodies.ellipes(x,y,)
        this.radius=radius
        World.add(world,this.body)  
    }

    display(){
        ellipesMode(CENTER)
        ellipes(this.body.position.x,this.body.position.y,this.radius)
    }
}