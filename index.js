"use strict"

const convertColour = require("color-convert")
const roundIntervals = require("round-intervals")

module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	const [hue, saturation, value] = convertColour.hex.hsv(input)

	return convertColour.hsv.hex([roundIntervals(hue, 18), saturation, value])
}
