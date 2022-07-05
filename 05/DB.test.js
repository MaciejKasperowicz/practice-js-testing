import DB from './DB';

describe("DB", () => {
    const data1 = { a: 11, b: 22, id: 1 };
    const data2 = { a: 55, b: 11, id: 2 };

    function returnStartingDB() {
        const db = new DB([data1, data2]);
        return db;
    }

    describe("insert", () => {
        const db = returnStartingDB();

        it("should return true when data.id is na number", () => {
            const newData = { a: 1, b: 2, id: 3 };
            function isNumber({ id }) {
                if (typeof id === "number") return true
            }

            return db.insert(newData)
                .then(result => expect(isNumber(result)).toBe(true))
            // .catch(err => expect(err.message).toBe("ID can be only number!"))
        });

        it("should reject when data.id isn't a number", () => {
            const dataNaNID = { a: 2, b: 3, id: "a" };
            return expect(db.insert(dataNaNID))
                .rejects.toThrow("ID can be only number!");
            // expect.assertions(1);
            // const newData = { a: 1, b: 2, id: 3 }


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

            // return expect(db.insert(dataErr))
            //     .rejects.toThrow("data.id isn't a number");
        });

        it("should reject when data.id is duplicated", () => {
            const dataDupeID = { a: 1, b: 2, id: 2 }
            return expect(db.insert(dataDupeID))
                .rejects.toThrow('ID can\'t be duplicated!')
        });

    });

    describe("select", () => {
        const db = returnStartingDB();

        it("should return row when selected id exists", () => {
            return db.select(2)
                .then(result => expect(result).toBe(data2))
        });

        it("should reject when selected id not found", () => {
            return expect(db.select(4))
                .rejects.toThrow("ID not found");
            // return (db.select(4))
            //     .catch(err => expect(err.message).toBe("ID not found"))
        });

    });

    describe("remove", () => {
        const db = returnStartingDB();

        it("should remove item when exists", () => {
            return db.remove(2)
                .then(result => expect(result).toBe('Item was remove!'))
        });

        it("should reject when item not exist", () => {
            return expect(db.remove(4))
                .rejects.toThrow("Item not exist!");
        });

    });

    describe("update", () => {
        const db = returnStartingDB();

        it("should update item when id is set and exists", () => {
            const dataToUpdate = { a: 33, b: 66, id: 1 }
            return db.update(dataToUpdate)
                .then(result => expect(result).toBe(dataToUpdate))
        });

        it("should reject when id is not set", () => {
            const dataToUpdateWithoutID = { a: 33, b: 66 };
            return expect(db.update(dataToUpdateWithoutID))
                .rejects.toThrow("ID have to be set!");
        });

        it("should reject when id is set but not found ", () => {
            const dataToUpdateWithWrongID = { a: 33, b: 66, id: 4 };
            return expect(db.update(dataToUpdateWithWrongID))
                .rejects.toThrow("ID not found!");
        });

    });

    describe("truncate", () => {
        const db = returnStartingDB();

        it("should return true when truncate db", () => {
            return db.truncate()
                .then(result => expect(result).toBe(true))
            // .then(() => db.insert({ id: 5 }))
            // .then(() => db.getRows())
        });

    });

    describe("getRows", () => {
        const db = returnStartingDB();

        it("should return rows when getRows", () => {
            return db.getRows()
                .then(result => expect(result).toStrictEqual([data1, data2]))
            // return db.getRows()
        });

    });

});

