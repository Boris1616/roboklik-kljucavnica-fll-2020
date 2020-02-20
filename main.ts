radio.onReceivedString(function (receivedString) {
    // če je koda 11001
    if (receivedString == "11001") {
        // odkleni
        servos.P0.setAngle(0)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # # # # #
            # # # # #
            `)
        // ni več zaklenjeno
        zaklenjeno = false
    }
})
// ko pritisneš gumb A+B
input.onButtonPressed(Button.AB, function () {
    // sprazni zaslon
    basic.clearScreen()
    // izpiše P I N
    basic.showString("P I N")
    pin = ""
})
// ko pritisneš gumb B
input.onButtonPressed(Button.B, function () {
    // doda pinu šifro 0
    pin = "" + pin + "0"
    // pokliči 'ZAKLENI'
    zakleni()
})
function zakleni () {
    // če ima pin pet šifer
    if (pin.length == 5) {
        // če je šifra enaka prejšni
        if (zaklenjeno == true) {
            // če je pin za odklenit enak pinu
            servos.P0.setAngle(0)
            // če pin za odklenit ni enak pinu
            if (pin_za_odklenit == pin) {
                // odkleni
                servos.P0.setAngle(0)
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . .
                    # # # # #
                    # # # # #
                    `)
                basic.pause(1000)
                // ni več zaklenjeno
                zaklenjeno = false
            } else {
                // pokaži smrtno glavo
                basic.showIcon(IconNames.Skull)
                basic.pause(1000)
                // sprazni zaslon
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
// ko pritisneš gumb A
input.onButtonPressed(Button.A, function () {
    // doda pinu šifro 1
    pin = "" + pin + "1"
    zakleni()
})
let pin_za_odklenit = ""
let zaklenjeno = false
let pin = ""
radio.setGroup(88)
pin = ""
zaklenjeno = false
