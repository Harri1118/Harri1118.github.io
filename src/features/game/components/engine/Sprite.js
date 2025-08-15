class Sprite{
    static nextId = 1
    constructor(x,y,width,height,speed){
        this.id = this.nextId++
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
    }
}

export default Sprite