import randomNumber from './app';

it("return 1 when you draw number between 1 and 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
})

it("throw exception when property min is not a number", () => {
    function isMinPropNumber() {
        randomNumber(5, undefined);
    }

    expect(isMinPropNumber).toThrow()
})

it("throw exception when property max is not a number", () => {
    function isMaxPropNumber() {
        randomNumber(undefined, 10);
    }

    expect(isMaxPropNumber).toThrow()
})