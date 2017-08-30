var Paddle = function(){
  var image = imageFromPath( 'images/paddle.png' )
  var o = {
    image: image,
    speed: 10,
    x: 150,
    y: 550,
    alive: true
  }
  var canvas = document.querySelector("#id-canvas")
  o.moveLevel = function( x ){
      if( x < 0 ){
        x = 0
      }
      else if( x > canvas.width - o.image.width ){
        o.x = canvas.width - o.image.width
      }
      else o.x = x
  }
  o.moveUpright = function( y ){
       if( y < 0 ){
        y = 0
      }
      else if( y > canvas.height - o.image.height ){
        console.log("o.image.height"+o.image.height)
        o.y = canvas.height - o.image.height
      }
      else o.y = y
  }
  
  o.moveRight = function(){
      o.moveLevel( o.x + o.speed )
  }
  o.moveLeft = function(){
      o.moveLevel( o.x - o.speed )
  }
  
   o.moveUp = function(){
      o.moveUpright( o.y - o.speed )
  }
    o.moveDown = function(){
      o.moveUpright( o.y + o.speed )
  }
  
  return o
}
