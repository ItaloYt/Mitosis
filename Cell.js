import GameObject from "./GameObject.js"

function Cell(x, y, radio, color, screen) {
  this.x = x
  this.y = y
  
  this.radio = radio
  this.color = color
  
  this.draw = ()=>{
    if(!this.wasSetted()) { console.error("Cell not setted"); return; }
    
    this.ctx.globalAlpha = this.color.normalized().alpha
    
    this.ctx.beginPath()
    
    this.ctx.fillStyle = this.color.toCss()
    
    this.ctx.arc(this.x, this.y, this.radio, 0, 360 * Math.PI / 180)
    
    this.ctx.fill()
  }
  
  screen.addObject(this)
  
  this.mitosis = ()=>{
    return new Cell(this.x + Math.floor(Math.random() * 20 - 5), this.y + Math.floor(Math.random() * 20 - 5), this.radio/2, this.color, screen)
  }
}

Cell.prototype = new GameObject()

export default Cell