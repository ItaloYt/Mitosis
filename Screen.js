export default function Screen(color, w, h) {
  const canvas = document.body.appendChild(document.createElement("canvas"))
  
  canvas.style.width = w + "px"
  canvas.style.height = h + "px"
  canvas.width = w
  canvas.height = h
  
  this.width = w
  this.height = h
  this.backgroundColor = color
  
  canvas.style.backgroundColor = this.backgroundColor.toCss()
  
  const ctx = canvas.getContext("2d")
  
  let Game;
  
  const updateCanvas = ()=>{
    canvas.style.width = this.width + "px"
    canvas.style.height = this.height + "px"
    canvas.width = this.width
    canvas.height = this.height
    canvas.style.backgroundColor = this.backgroundColor.toCss()
  }
  
  this.render = ()=>{
    const delta = 1/60
    
    updateCanvas()
    
    ctx.clearRect(0, 0, this.width, this.height)
    
    if(Game) { Game.render(delta) }
    
    setTimeout(this.render, 0)
  }
  
  this.addObject = (object)=>{
    
  }
  
  this.event = (type, handler)=>{
    canvas.addEventListener(type, handler)
  }
  
  this.setGame = game=>{
    Game = game
  }
  
  this.STRICT = {
    ctx: ctx,
    canvas: canvas
  }
}