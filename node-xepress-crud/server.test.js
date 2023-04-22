const request = require("supertest");
const app = require("./index.js");
const jwt = require("jsonwebtoken");

const secret_key = 'phum';

describe("GET /login", () => {
  test("should return a JWT token", async () => {
    const res = await request(app).get("/login").expect(200);
    console.log(res.text);
    const token = res.text
    // const json = res.text
    // const obj = JSON.parse(json)
    // const token = obj.token
    const decoded = jwt.verify(token, secret_key);
    expect(decoded.user).toBe("phum");
  });
});

// test("Querry", async () => {
//     const response = await request(app).get("/re");
//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe("[{\"x\":1,\"y\":2,\"fx\":3},{\"x\":4,\"y\":5,\"fx\":9}]");
//   });