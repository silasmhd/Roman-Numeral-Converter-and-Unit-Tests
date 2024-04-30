const roman = require("../roman")

test("Returns false if the input is not an integer (passes one)", function () {
    expect(roman("one")).toBe(false)
})
