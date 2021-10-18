const rewire = require("rewire")
const salut = rewire("./salut")
const add = salut.__get__("add")
// @ponicode
describe("add", () => {
    test("0", () => {
        let callFunction = () => {
            add(-1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            add(-10, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            add(-1, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            add("bar", -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            add(0, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            add(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
