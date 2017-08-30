var imageFromPath = function( path ){//将导入图片的动作
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function( o, b ){
  if( b.y > o.y && b.y<o.y+o.image.height ){
    if( b.x > o.x && b.x < o.x+o.image.width){
      log("碰撞")
      return true
    }
  }
  return false
}
