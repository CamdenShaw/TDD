const grabUnique = require("../lib/grabUnique.js")

describe("letter grabber function detector", () => {
    describe("expects a string, not anything else", () =>{
        it("expects a string as an argument", () => {
            expect(() => grabUnique(3)).toThrow()
            expect(() => grabUnique(null)).toThrow()
            expect(() => grabUnique(undefined)).toThrow()
            expect(() => grabUnique(["adfasfd"])).toThrow()
            expect(() => grabUnique({0:""})).toThrow()
            expect(() => grabUnique('')).toThrow()
      })
    })
    describe("it shouldn't have spaces", () => {
        it("this functions shouldn't have any spaces in the string, it is a single word counter only.", () => {
            expect(() => grabUnique("kljdf ajklfjllkaj")).toThrow()
            expect(() => grabUnique("kljdf  ajklfjl lkaj")).toThrow()
        })
    })
})