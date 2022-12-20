input.onButtonPressed(Button.A, function () {
    while (true) {
        if (bitbot.readLine(BBLineSensor.Left) == 1) {
            bitbot.rotate(BBRobotDirection.Left, 15)
        } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotate(BBRobotDirection.Right, 15)
        } else {
            bitbot.go(BBDirection.Forward, 15)
        }
    }
})
loops.everyInterval(500, function () {
    bitbot.setLedColor(0x00FFFF)
    basic.pause(250)
    bitbot.setLedColor(0xFF0000)
})
