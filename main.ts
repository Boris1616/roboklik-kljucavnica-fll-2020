function zakleni() {
    if (pin.length == 5) {                      //če je pin že dolg 5 znakov
        if (zaklenjeno == true) {               //če je že zaklenjeno
            if (pin_za_odklenit == pin) {       //če je uporabnik vnesel pravi pin
                servos.P0.setAngle(0)           //se odklene
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . .
                    # # # # #
                    # # # # #
                    `)
                basic.pause(1000)
                zaklenjeno = false              //
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
            basic.clearScreen()
            pin = ""
            zaklenjeno = true
        }
    }
}
input.onButtonPressed(Button.B, function () {
    pin = "" + pin + "0"
    zakleni()
})
input.onButtonPressed(Button.A, function () {
    pin = "" + pin + "1"
    zakleni()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("VNESI PIN")
    pin = ""
})
let pin_za_odklenit = ""
let zaklenjeno = false
let pin = ""
pin = ""
zaklenjeno = false
