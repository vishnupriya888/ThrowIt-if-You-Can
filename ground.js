class Ground{
    constructor(x, y, width, height, angle, choice){
        var ground_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, ground_options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        if(choice === 1){
            this.image = loadImage("land.png");
        }else{
            this.image = loadImage("base.png");
        }
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}