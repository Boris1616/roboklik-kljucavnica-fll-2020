input.onButtonPressed(Button.AB, function () {      //če pritisneš gumb A-B se resetira pin
    basic.showString("VNESI PIN")                   //napiše se VNESI PIN
    pin = ""
})
input.onButtonPressed(Button.B, function () {       //če pritisneš gumb B
    pin = "" + pin + "0"                            //pinu doda šifro 0
    zakleni()
})
function zakleni () {
    if (pin.length == 5) {                          //če je šifra dolga 5 znakov
        if (zaklenjeno == true) {                   //če je pravi pin
            if (pin_za_odklenit == pin) {           //se odklene
                servos.P0.setAngle(0)
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . . . .
                    # # # # #
                    # # # # #
                    `)
                basic.pause(1000)
                zaklenjeno = false                  //če je napačen pin
            } else {                                
                basic.showIcon(IconNames.Skull)     //prikaz smrtne glave
                basic.pause(1000)
                basic.clearScreen()
            }
        } else {
            servos.P0.setAngle(180)
            pin_za_odklenit = pin                   //ko vneseš 5 šifer se zaklene
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                # # # # #
                `)
            basic.pause(1000)
            basic.clearScreen()
            pin = ""                                //pin se resetira
            zaklenjeno = true                       //pin se shrani
        }
    }
}
input.onButtonPressed(Button.A, function () {       //če pritisneš gumb A
    pin = "" + pin + "1"                            //pinu doda šifro 1
    zakleni()
})
let pin_za_odklenit = ""
let zaklenjeno = false
let pin = ""
pin = ""
zaklenjeno = false
