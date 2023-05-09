class Ground{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.h = h
        this.w = w
        var options={isStatic:true}
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
    
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
    }
}