import randomNumber from './app';

it("return 1 when you draw number between 1 and 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
})

it("throw exception when property min is not a number", () => {
    function isMinNotANumber() {
        randomNumber("5", 7)
    }
    expect(isMinNotANumber).toThrow()
})

it("throw exception when property max is not a number", () => {
    function isMaxNotANumber() {
        randomNumber(5, "7")
    }
    expect(isMaxNotANumber).toThrow()
})

it("throw exception when property min is greater than property max", () => {
    function isMinGreaterThanMax() {
        randomNumber(3, 1)
    }
    expect(isMinGreaterThanMax).toThrow()
})

it("is returned value between min and max property", () => {
    const min = 5;
    const max = 10;

    console.log(randomNumber(min, max))
    expect(randomNumber(min, max)).toBeGreaterThanOrEqual(min);
    expect(randomNumber(min, max)).toBeLessThanOrEqual(max);

})