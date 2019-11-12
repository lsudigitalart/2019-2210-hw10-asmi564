class Particle{
  constructor(){
    //makes object for you; will make a new object. 
    //this= characteristics for new circles; automatically returns
	this.pos = createVector(random(50,width),random(50,height));
  this.width = 50
  this.lifespan = 175;
}
  change(){
  this.width +=9;
  this.lifespan -=5;   
  }
}

var particles = [];

function setup() {
  createCanvas(1000, 800);
  frameRate(25);
	rectMode(CENTER)
}


function draw() {
  background(204,229,255);
  particles.push(new Particle);
  for(var i=0; i<particles.length;i++){
  if(particles[i].lifespan <= 0){
    particles.splice(i,i-2);
    
    //remove i-2 elements from index i

    //Splice: inserts a value or an array of values into an existing array
    // The first parameter specifies the initial array to be modified
    //the second parameter defines the data to be inserted
    //The third parameter specifies the array position 

  }
    else{
			strokeWeight(0.1)
      fill(random(255,255,204), random(71,200), random(24,92), particles[i].lifespan)
			circle(particles[i].pos.x,particles[i].pos.y,particles[i].width*0.2,particles[i].width*0.2);
      particles[i].change(); 
    }
  }
}