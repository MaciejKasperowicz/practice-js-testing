export default class DB {
    constructor(db = []) {
        // this._rows = [];
        this._rows = db
    }

    insert(data) {
        return new Promise((resolve, reject) => {
            if (data.id) {
                if (typeof data.id !== 'number') {
                    this.async(reject, new Error('ID can be only number!'));
                    // this.async(reject, 'ID can be only number!');
                    return null; // stop function
                } else if (this._rows.some(item => item.id === data.id)) {
                    this.async(reject, new Error('ID can\'t be duplicated!'));
                    return null; // stop function
                }
            }

            this.async(() => {
                if (!data.id) {
                    // console.log("nie ma data.id");
                    data.id = this._rows.reduce((acc, item) => {
                        return acc <= item.id ? item.id + 1 : acc;
                    }, 1);
                }

                this._rows.push(data);
                resolve(data)
            });
        });
    }

    select(id) {
        return new Promise((resolve, reject) => {
            this.async(() => {
                const [row = null] = this._rows.filter(item => item.id === id);
                if (row) {
                    resolve(row);
                } else {
                    reject(new Error('ID not found'));
                }
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this.async(() => {
                const lengthBeforeFilter = this._rows.length;
                this._rows = this._rows.filter(item => item.id !== id);
                const lengthAfterFilter = this._rows.length;

                if (lengthBeforeFilter === lengthAfterFilter) {
                    reject(new Error('Item not exist!'));
                } else {
                    resolve('Item was remove!');
                }
            });
        });
    }

    update(data) {
        return new Promise((resolve, reject) => {
            if (!data.id) {
                this.async(reject, new Error('ID have to be set!'));
            } else {
                this.async(() => {
                    let updated = null;
                    this._rows = this._rows.map(item => {
                        if (item.id === data.id) {
                            updated = data
                            return updated;
                        }

                        return item;
                    });

                    if (updated) {
                        resolve(updated);
                    } else {
                        reject(new Error('ID not found!'));
                    }
                });
            }
        });
    }

    truncate() {
        return new Promise(resolve => {
            this.async(() => {
                this._rows = [];
                resolve(true);
            });

        })
    }

    getRows() {
        return new Promise(resolve => {
            this.async(() => {
                resolve(this._rows, console.log(this._rows));
                // resolve(this._rows);

            });
        })
    }

    async(callback, ...params) {
        setTimeout(() => {
            callback(...params);
        }, Math.random() * 100);
    }
}