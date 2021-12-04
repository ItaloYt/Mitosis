export default function Color(red, green, blue, alpha = 255) {
  
  this.red = red
  this.green = green
  this.blue = blue
  this.alpha = alpha
  
  this.normalized = ()=>{
    return {
      red: this.red / 255,
      green: this.green / 255,
      blue: this.blue / 255,
      alpha: this.alpha / 255
    }
  }
  
  this.toCss = ()=>{
    return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")"
  }
}