import Cell from "./Cell.js"
import Color from "./Color.js"

export default function Game(screen) {
  this.screen = screen
  
  const cells = []
  
  for(let x = 0; x < 10; x++) {
    const radio = Math.floor(Math.random() * (25-5) + 5)
    
    cells.push(
      new Cell(
        Math.floor(Math.random() * (this.screen.width-radio*2) + radio),
        
        Math.floor(Math.random() * (this.screen.height-radio*2) + radio), 
        
        radio, 
        
        new Color(
          Math.floor(Math.random() * 255), 
          Math.floor(Math.random() * 255), 
          Math.floor(Math.random() * 255), 
          Math.floor(Math.random() * (255-150) + 150)), 
        
        this.screen
      )
    )
    
    cells[x].setup(this.screen.STRICT)
  }
  
  this.render = delta=>{
    for(let x = 0; x < cells.length; x++) {
      cells[x].draw()
      
      cells[x].x += (Math.random() * 20 - 10) * delta
      
      cells[x].y += (Math.random() * 20 - 10) * delta
    }
  }
  
  this.screen.event("touchstart", e=>{
    const touch = {
      x: Math.floor(e.touches[0].clientX),
      y: Math.floor(e.touches[0].clientY)
    }
    
    for(let x = 0; x < cells.length; x++) {
      const cell = cells[x]
      
      if(touch.x >= cell.x - cell.radio && touch.x <= cell.x + cell.radio && touch.y >= cell.y - cell.radio && touch.y <= cell.y + cell.radio && cell.radio > 5) {
        
        cells.push(cell.mitosis())
        cells[x] = cell.mitosis()
      }
    }
  })
  
  this.screen.setGame(this)
}