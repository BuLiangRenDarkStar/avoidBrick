var Block = function( speed, x  ){
  var image = imageFromPath( 'images/block.png' )
  var o = {
    image: image,
    x: x,
    y: 0,
    w: 55,
    speedY: speed,
    h: 26,
  }
  o.move = function(){
     o.y += o.speedY
  }
  o.collide = function(b){
    return  rectIntersects(o,b) || rectIntersects(b,o)
  }
  //每次有砖块从画面消失就将改砖块位置和速度重置，并提高该砖块速度
  o.reset = function( preSpeed ){
      o.y = 0
      o.x  = randomCreate( 0,400 )
      o.speedY += 0.5 
  }
  return o
}
