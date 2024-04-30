const verifyPassword = require("../verifyPassword")

test("Returns false if too short", function () {
    expect(verifyPassword("one").length).toBe(false)
})

test("Returns true when oexactlyver eight letters", function () {
    expect(verifyPassword("8letters").length).toBe(true)
})

test("Returns true when over eight letters", function () {
    expect(verifyPassword("eight letters").length).toBe(true)
})

test("Returns false since there are no lowercase letter", function () {
    expect(verifyPassword("CAPITOLS").lowercase).toBe(false)
})

test("Returns true when there is at least one lowercase", function () {
    expect(verifyPassword("AAAARGHHHhh").lowercase).toBe(true)
})

test("Returns false because there is no lowercase", function () {
    expect(verifyPassword("grammern't").uppercase).toBe(false)
})

test("Returns true because there is an uppercase", function () {
    expect(verifyPassword("Grammerful").uppercase).toBe(true)
})

test("Returns false when there are no numbers", function () {
    expect(verifyPassword("I can't count").digit).toBe(false)
})

test("Returns true for at least one number", function () {
    expect(verifyPassword("I can only count to 4!").digit).toBe(true)
})

test("Returns false because there are no symbols", function () {
    expect(verifyPassword("I'm not like other girls").symbol).toBe(false)
})

test("Returns true when there is one special cymbol", function () {
    expect(verifyPassword("Yeah you are!").symbol).toBe(true)
})

test("Returns false since this person likes to add weird characters", function () {
    expect(verifyPassword("å∂ƒ∆˜∂åøˆ√å¬≈˚˜").noInvalid).toBe(false)
})

test("Returns true because this person makes normal passwords", function () {
    expect(verifyPassword("IDontAddWeirdCharacters").noInvalid).toBe(true)
})
