const letterCounter = require("../lib/letterCount.js")


describe("letter counter function detector", () => {
    describe("expects a string, not anything else", () =>{
        it("expects a string as an argument", () => {
            expect(() => letterCounter(3)).toThrow()
            expect(() => letterCounter(null)).toThrow()
            expect(() => letterCounter(undefined)).toThrow()
            expect(() => letterCounter(["adfasfd"])).toThrow()
            expect(() => letterCounter({0:""})).toThrow()
        })
    })
    describe("it shouldn't have any special characters", () => {
        it("this function shouldn't have any special characters in it, only letters", () => {
            expect(() => letterCounter("!:@#$%^&*()_+-=`~")).toThrow()
            expect(() => letterCounter(`{}|[]\:;"'?/>.<,`)).toThrow()
            expect(() => letterCounter("`¡™£¢∞§¶•ªº≠œ∑´®†¥¨ˆøπ“‘«å∂ƒ©∆˚¬…æ≈√˜µ≤≥")).toThrow()
        })
    })
    describe("this function needs a string", () => {
        it("expects to return a count of the letters in a string", () => {
            expect(letterCounter("aabbcc")).toEqual("a2b2c2")
        })
    })
    describe("it expects a return for adjacent letter count", () => {
        it("this function should return a count for adjacent letters only", () => {
            expect(letterCounter("aabbaa")).toEqual("a2b2a2")
        })
    })
    describe("it shouldn't have spaces", () => {
        it("this functions shouldn't have any spaces in the string, it is a single word counter only.", () => {
            expect(() => letterCounter("kljdf   ajklfjl lkaj")).toThrow()
        })
    })
})