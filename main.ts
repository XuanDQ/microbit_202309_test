let StartTime = 0
let ButtonPressed = false
let MolePosition = 0
basic.showString("3-2-1")
let OnGame = true
while (OnGame == true) {
    MolePosition = randint(0, 1)
    ButtonPressed = false
    basic.pause(300)
    if (MolePosition == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    StartTime = input.runningTime()
    while (ButtonPressed == false) {
        if (input.runningTime() - StartTime > 1000) {
            game.gameOver()
        }
        if (MolePosition == 0 && input.buttonIsPressed(Button.A)) {
            ButtonPressed = true
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
        } else if (MolePosition == 0 && input.buttonIsPressed(Button.B)) {
            ButtonPressed = true
            game.gameOver()
        }
        if (MolePosition == 1 && input.buttonIsPressed(Button.B)) {
            ButtonPressed = true
            basic.showIcon(IconNames.Yes)
            game.addScore(1)
        } else if (MolePosition == 1 && input.buttonIsPressed(Button.A)) {
            ButtonPressed = true
            game.gameOver()
        }
    }
}
