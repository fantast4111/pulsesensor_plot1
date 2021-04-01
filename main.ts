input.onButtonPressed(Button.A, function () {
    basic.showNumber(heartbeatformin)
})
input.onButtonPressed(Button.B, function () {
    heartbeatformin = 0
    while (count) {
        if (b - a > 20 && b - d > 20) {
            heartbeatformin += 1
        }
    }
    basic.showNumber(heartbeatformin)
})
let c = 0
let RawPulseSensorSignal = 0
let d = 0
let a = 0
let b = 0
let count = 0
let heartbeatformin = 0
basic.showString("PS")
let list = [0, 0, 0, 0]
basic.forever(function () {
    RawPulseSensorSignal = pins.analogReadPin(AnalogPin.P2)
    list.push(RawPulseSensorSignal)
    list.shift()
    a = list[0]
    b = list[1]
    c = list[2]
    d = list[3]
    basic.pause(100)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        count = 1
        basic.pause(15000)
    }
    count = 0
})
