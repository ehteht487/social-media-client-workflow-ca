
import { localStorageMock } from "./localStorage.test";
import {login} from "./login";

global.localStorage = new localStorageMock();

const TEST_ITEM = {id: "emiT@stud.noroff.no", password: "hellohello" }

function returnsValidToken() {
    return Promise.resolve({
        ok: true,
        status: 200,
        statusText: "OK",
        json: () => Promise.resolve(TEST_ITEM)
    })
}

it("Returns a valid token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => returnsValidToken());
    const testItem = await login(1)
    expect(testItem).toMatchObject(TEST_ITEM)
})