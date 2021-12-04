import Screen from "./Screen.js"
import Color from "./Color.js"
import Game from "./Game.js"

const screen = new Screen(new Color(0, 0, 0, 255), 300, 300)

new Game(screen)

screen.render()