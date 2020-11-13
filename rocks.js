  


class Stone {
    constructor() {
      
      this.x = floor(random(w));
      this.y = floor(random(h));
      this.rock = createVector(this.x, this.y);
    }
    show(){
        strokeWeight(0.5)
		fill((100 + 20*this.x)%260, 50, 95);
        rect(this.rock.x, this.rock.y,1.25,1.25,0.5);
    }
}
