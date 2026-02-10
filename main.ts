input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
