function Lid (x, y){
  this.x = x;
  this.y = y;
  this.name = " w Lid";

  this.display = function(){
    fill(0,0,255,35);
    rect(this.x , this.y , plateWidth, plateHeight);
  }

  this.text = function(){
    fill(0);
    text(this.name, this.x, this.y, plateWidth, plateHeight+30);
  }

}
