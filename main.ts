radio.onReceivedString(function (receivedString) {
    if (receivedString == "11001") {
        servos.P0.setAngle(0)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # # # # #
            # # # # #
            `)
        zaklenjeno = false
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("P I N")
    pin = ""
})
input.onButtonPressed(Button.B, function () {
    pin = "" + pin + "0"
    zakleni()
})
function zakleni () {
    if (pin.length == 5) {
        if (zaklenjeno == true) {
            if (pin_za_odklenit == pin) {
                servos.P0.setAngle(0)
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . .
                    # # # # #
                    # # # # #
                    `)
                basic.pause(1000)
                zaklenjeno = false
            } else {
                basic.showIcon(IconNames.Skull)
                basic.pause(1000)
                basic.clearScreen()
            }
        } else {
            servos.P0.setAngle(180)
            pin_za_odklenit = pin
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            pin = ""
            zaklenjeno = true
        }
    }
}
input.onButtonPressed(Button.A, function () {
    pin = "" + pin + "1"
    zakleni()
})
let pin_za_odklenit = ""
let zaklenjeno = false
let pin = ""
radio.setGroup(88)
pin = ""
zaklenjeno = false
