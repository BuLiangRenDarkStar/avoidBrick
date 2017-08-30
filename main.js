const randomCreate = function( start , end ){
    var n = Math.random()*(end-start+1)
    return Math.floor(n+start)
}

var log = console.log.bind(console)

var initBlocks = function( n ){//10个砖块
  var blocks = []
  var start = 1;//每隔10秒钟改变start，end使得速度加快
  var end = 5;
 
  
  for( var i=0; i<n; ++i ){
    var speedY = randomCreate( start,end )
    var x = randomCreate( 0,400 )
    log( "砖块位置"+x )
    var b = Block( speedY , x )
    blocks.push(b)
  }
  return blocks
}


var enableDebugModel = function (enable){
  if(!enable){
    return
  }
  window.paused = false
  window.addEventListener( 'keydown',function(event){
    var k = event.key
    if( k == 'p' ){
      paused = !paused
    }
  })
  //控制帧数
  //change
  document.querySelector('#id-input-speed').addEventListener('input',function(event){
    var input = event.target
    window.fps = Number(input.value)
    log(input.value)
  })

}

var __main = function (  ){

  enableDebugModel(true)

   var game = Game(30)

   var paddle = Paddle()

  game.registerAction('a',function(){
    paddle.moveLeft()
  })

  game.registerAction('d',function(){
    paddle.moveRight()
  })

  game.registerAction('w',function(){
    paddle.moveUp()
  })
    
  game.registerAction('s',function(){
    paddle.moveDown()
  })
    
 blocks = initBlocks( 6 )

  var score=0
  game.updata = function( ){
    if( paused ){
      return
    }
      for( var i=0; i<blocks.length; ++i ){
          blocks[i].move()
        //如果砖块位置超出画面则将其重置
          if( blocks[i].y > 600){
            score += 10
            console.log("砖块离开画面")
            blocks[i].reset( blocks[i].speedY )
        }
          //挡板和砖块相撞挡板生命值为0
          if( rectIntersects(blocks[i], paddle) ){
              paddle.alive = false
          }
      }
  }

  game.draw = function(){
    game.context.font = "24px serif";
    game.context.fillText('分数: ' + score, 300, 30)
    if(paddle.alive){
        game.drawImage( paddle )
    }
    log("砖块数"+blocks.length)
    for( var i=0; i<blocks.length; ++i ){
        block = blocks[i]
        game.drawImage( block )
      }
    }
}

__main()
