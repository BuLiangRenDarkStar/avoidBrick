var Game = function(fps){
  var g = {
    actions: {},
    keydowns: {}
  }
  var canvas = document.querySelector("#id-canvas")
  var context = canvas.getContext('2d')

  g.canvas = canvas
  g.context = context

  g.drawImage = function(p){
    g.context.drawImage( p.image, p.x, p.y )
  }
  //events
  window.addEventListener('keydown',function(event){
    g.keydowns[event.key] = true
  })

  window.addEventListener('keyup',function(event){
    g.keydowns[event.key] = false
  })
  g.registerAction = function(key,callback){
    g.actions[key] = callback
  }
  //timer
  window.fps = 30
  var runloop = function(){
    var actions = Object.keys(g.actions)
  //  log(actions)
    for(var i=0; i<actions.length; i++){
      var key = actions[i]
      if( g.keydowns[key] ){
        //调用注册的action
        g.actions[key]()
      }
    }
    //更新ball位置
    g.updata( )
    //清除原图
    context.clearRect(0, 0, canvas.width, canvas.height)
    //画图
    g.draw()
    setTimeout(function(){
      runloop()
    },1000/window.fps)
  }

  setTimeout(function(){
    runloop()
  },1000/fps)

  return g
}
