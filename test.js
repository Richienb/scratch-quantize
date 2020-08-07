const test = require("ava")
const scratchQuantize = require(".")

test("main", t => {
	t.is(scratchQuantize("#FFD800"), "FFE600")
})
