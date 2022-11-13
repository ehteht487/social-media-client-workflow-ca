import * as storage from "../../storage";

export class localStorageMock {
    constructor() {
        this.store = {};
    }
    clear() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key] || null;
    }
    setItem(key, value) {
        this.store[key] = String(value);        
    }
    removeItem(key) {
        delete this.store[key];
    }
}

global.localStorage = new localStorageMock;

describe("local storage", () => {
    it("Saves array to local storage", () => {
        const key = "token";
        const value = ["email", "password"];
        const serializedValue = JSON.stringify(value);
        storage.save(key, value)
        expect(localStorage.getItem(key)).toEqual(serializedValue);
    })
    it("Loads array from local storage", () => {
        const key = "token";
        const value = ["email", "password"];
        storage.save(key, value);
        expect(storage.load(key)).toEqual(value);
    })
    it("Removes array from local storage", () => {
        const key = "token";
        const value = ["email", "password"];
        storage.save(key, value);
        expect(storage.load(key)).toEqual(value);
        storage.remove(key);
        expect(storage.load(key)).toEqual(null);
    })
    
})

