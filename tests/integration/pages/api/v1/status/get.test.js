test("GET api/v1/status should return 200", async () => {
  const response = await fetch("https://teste.acneto.dev/api/v1/status");
  expect(response.status).toBe(200);
});
