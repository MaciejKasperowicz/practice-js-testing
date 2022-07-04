import DB from './DB';

describe("DB", () => {
    describe("insert", () => {
        it("should return true when data.id is na number", () => {
            const db = new DB();
            const data1 = { a: 1, b: 2, id: 1 };
            const dataErr = { a: 1, b: 2, id: "a" };
            function isNumber({ id }) {
                if (typeof id === "number") return true
            }

            return db.insert(data1)
                .then(result => expect(isNumber(result)).toBe(true))
            // .catch(err => expect(err.message).toBe("ID can be only number!"))
        })
        it("should reject when data.id isn't a number", () => {
            // expect.assertions(1);
            const db = new DB();
            const data1 = { a: 1, b: 2, id: 1 };
            const dataErr = { a: 2, b: 3, id: "a" }

            // return db.insert(data1)
            //     .catch(err => expect(err.message).toBe("data.id isn't a number"))
            // return db.insert(dataErr)
            //     .catch(err => expect(err.message).toBe("ID can be only number!"))
            // return db.insert(dataErr)
            //     .catch(err => expect(err.message).toBe("data.id isn't a number"))

            // return expect(db.insert(data1))
            //     .rejects.toThrow("data.id isn't a number");
            // return expect(db.insert(data1))
            //     .rejects.toThrow("ID can be only number!");
            return expect(db.insert(dataErr))
                .rejects.toThrow("ID can be only number!");
            // return expect(db.insert(dataErr))
            //     .rejects.toThrow("data.id isn't a number");
        });

        it("should reject when data.id is duplicated", () => {
            const db = new DB();
            const data1 = { a: 1, b: 2, id: 1 };
            const data2 = { a: 5, b: 10, id: 1 };

            return expect(db.insert(data1)
                .then(() => db.insert(data2)))
                .rejects.toThrow('ID can\'t be duplicated!')
        })
    })

    describe("select", () => {
        it("should return row when selected id exists", () => {
            const data1 = { a: 11, b: 22, id: 1 };
            const data2 = { a: 55, b: 11, id: 2 };
            const db = new DB([data1, data2]);

            return db.select(2)
                .then(result => expect(result).toBe(data2))
        })

        it("should reject when selected id not found", () => {
            const data1 = { a: 11, b: 22, id: 1 };
            const data2 = { a: 55, b: 11, id: 2 };
            const db = new DB([data1, data2]);

            return expect(db.select(3))
                .rejects.toThrow("ID not found");
            // return (db.select(3))
            //     .catch(err => expect(err.message).toBe("ID not found"))
        })
    })

})

