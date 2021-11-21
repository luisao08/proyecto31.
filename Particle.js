class Particle {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.r = 9;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        this.color=color(random(0,255),random(0,255),random(0,255))
        fill(this.color);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};