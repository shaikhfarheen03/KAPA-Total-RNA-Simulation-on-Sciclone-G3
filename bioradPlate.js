function Biorad (x, y){
  this.x = x;
  this.y = y;
  this.name= "Biorad"

  this.display = function(){
    fill(250,200,0,60);
    rect(this.x+2 , this.y+2 , plateWidth, plateHeight,5);
    fill(255);
    for (i=this.x+5; i<this.x+plateWidth+5; i+=plateWidth/12){
      for (j=this.y+5; j<this.y+plateHeight+5; j+=plateHeight/8){
        ellipse(i, j, 7, 7)
      }
    }
  }

  this.text = function(){
    fill(0);
    text(this.name, this.x, this.y, plateWidth, plateHeight);
  }

}
