const roman = require("../roman")

test("Returns false if the input is not an integer (passes one)", function () {
    expect(roman("one")).toBe(false)
})

test("Returns false if the input is not an integer (passes 1.2)", function () {
    expect(roman("1.2")).toBe(false)
})

test("Returns true since the input is an integer", function () {
    expect(roman(1000)).toBe("M")
})

test("tests that the while loop works", function () {
    expect(roman(3000)).toBe("MMM")
})
