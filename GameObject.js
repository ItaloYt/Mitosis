export default function GameObject() {
  this.ctx, this.canvas
  
  this.setup = strict=>{
    this.ctx = strict.ctx
    this.canvas = strict.canvas
  }
  
  this.draw = ()=>{}
  
  this.wasSetted = ()=>{
    return this.ctx ? true : false
  }
}