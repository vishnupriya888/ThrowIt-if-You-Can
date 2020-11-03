class Box{
    constructor(x, y, width, height){
        var box_options = {
            restitution: 0.8,
            density: 1,
            friction: 0.7,
        }

        this.body = Bodies.circle(x, y, width, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width * 2, this.width * 2);  
        pop();
    }

    flingForward(){
        Matter.Body.setVelocity(this.body, { x: 3, y: -5 });
        Matter.Body.setAngularVelocity(this.body, 0.2);
    }

    flingBack(){
        Matter.Body.setVelocity(this.body, { x: -3, y: -5 });
        Matter.Body.setAngularVelocity(this.body, -0.2);
    }

    flingUp(){
        Matter.Body.setVelocity(this.body, { x: 0, y: -10 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }
}
