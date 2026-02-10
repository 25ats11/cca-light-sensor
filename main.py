def on_button_pressed_a():
    basic.show_number(input.light_level())
input.on_button_pressed(Button.A, on_button_pressed_a)

# Remember to commit and push changes to github!!!Emergency saving if not it will not be saved!!!!!!!!!!!!!!!!!!!!!!!!

def on_forever():
    if input.light_level() < 100:
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            """)
basic.forever(on_forever)
