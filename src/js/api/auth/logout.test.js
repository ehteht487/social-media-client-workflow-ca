import { logout } from "./logout";
import { localStorageMock } from "./localStorage.test";

global.localStorage = new localStorageMock;

describe("Log out", () =>{
    it("Clears token from local storage", () => {
        logout();
        expect(localStorage.getItem).toEqual(null);
    });
})
