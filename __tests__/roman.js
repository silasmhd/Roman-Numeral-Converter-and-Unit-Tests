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

test("returns true if each if statement runs once", function () {
    expect(roman(1166)).toBe("MCLXVI")
})

test("tests that 0 returns false", function () {
    expect(roman(0)).toBe(false)
})

test("tests that anythong above 3999 returns false", function () {
    expect(roman(4000)).toBe(false)
})

test("tests that the while loop works", function () {
    expect(roman(3999)).toBe("MMMCCCCCCCCCLXXXXVIIII")
})

test("Returns false if the input is not an integer (passes 1.2)", function () {
    expect(roman("1.2")).toBe(false)
})

test("checks input of 1", function () {
    expect(roman(1)).toBe("I")
})