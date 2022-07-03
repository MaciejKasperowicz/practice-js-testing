export default function randomNumber(min, max) {
    if (typeof min !== "number") {
        throw new Error("Property min have to be a number");
    }
    if (typeof max !== "number") {
        throw new Error("Property max have to be a number");
    }
    if (min > max) {
        throw new Error("Property max have to be greater than property min")
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}