input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (30 < input.lightLevel()) {
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
