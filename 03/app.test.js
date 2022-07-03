import randomNumber from './app';

it("return 1 when you draw number between 1 and 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
})