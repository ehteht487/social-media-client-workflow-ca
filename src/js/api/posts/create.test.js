import { createPost } from "./create";

const TEST_TITLE = "Test title";
const TEST_BODY = "Test";
const TEST_TAG = "Test tag";
const TEST_MEDIA = "https://picsum.photos/id/237/200/300";

const TEST_ITEM = {
    title: TEST_BODY,
    body: TEST_BODY,
    tag: TEST_TAG,
    media: TEST_MEDIA
}

function postSuccess() {
    return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(TEST_ITEM);
    });
};

describe("createPost", () => {
    it("creates new item on the API", async () => {
        global.fetch = jest.fn(() => postSuccess());
        const testItem = await createPost(TEST_ITEM);
        expect(testItem).toEqual(TEST_ITEM)
    });
})