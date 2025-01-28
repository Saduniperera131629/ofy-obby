led.plot(0, 0)
led.setBrightness(255)
radio.setGroup(1)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
basic.forever(function () {
	
})
