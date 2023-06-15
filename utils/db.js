const {readFile, writeFile} = require('fs').promises;
const {join} = require('path');
const {v4: uuid} = require('uuid');

class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName);
        this._load();
    }

    async _load() {
        return this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'));
    }

    async create(obj) {
        this._data.push({
            id: uuid(),
            ...obj,
        });
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8');
    }

    getOne(id) {
        return this._data.find(obj => obj.id === id);
    }

    getAll() {
        return this._data;
    }

    update(id, newObj) {
        this._data = this._data.map(obj => (
            obj.id === id ? {
                ...obj,
                ...newObj,
            } : obj
        ))
    }

    async delete(id) {
        this._data = this._data.filter(obj => obj.id !== id);
        await writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8');
    }

}

const db = new Db('data.json');

module.exports = {
    db,
}