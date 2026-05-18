const request = require("supertest");
const app = require("../src/app");

describe("DevOps Portfolio API", () => {
  test("GET / should return API information", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("DevOps Pipeline API");
    expect(response.body.status).toBe("running");
    expect(response.body.author).toBe("Bleriot Wafo");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body).toHaveProperty("uptime");
  });
});