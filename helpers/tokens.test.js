const jwt = require("jsonwebtoken");
const { createToken } = require("./tokens");
const SECRET_KEY = "adslfkjsadlfkjaglkj";

describe("createToken", function () {
  test("works: not admin", function () {
    const token = createToken({ id: "test", is_admin: false });
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      id: "test",
      isAdmin: false,
    });
  });

  test("works: admin", function () {
    const token = createToken({ id: "test", isAdmin: true });
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      id: "test",
      isAdmin: true,
    });
  });

  test("works: default no admin", function () {
    // given the security risk if this didn't work, checking this specifically
    const token = createToken({ id: "test" });
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      id: "test",
      isAdmin: false,
    });
  });
});
