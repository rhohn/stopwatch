input.onButtonPressed(Button.A, function () {
    startTime = input.runningTime()
    while (!(input.buttonIsPressed(Button.B))) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
})
input.onButtonPressed(Button.B, function () {
    elapsedTime = input.runningTime() - startTime
    basic.clearScreen()
    basic.showString("" + elapsedTime / 1000 + " SECONDS", 75)
control.reset()
})
let startTime = 0
let elapsedTime = 0
startTime = 0
while (startTime == 0) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showIcon(IconNames.SmallDiamond)
}
