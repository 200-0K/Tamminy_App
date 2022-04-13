import { ApiManager } from "./ApiManager";

let apiManager = ApiManager({
  baseUrl: "http://localhost/api/v1",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkxODc5NTcsImV4cCI6MTY0OTE4ODg1NywiZGF0YSI6eyJpZCI6NX19.alA7Qd5bzUadtvO1c3mXf0odAzDBtrvrF51W-nVCC6A"
})

test("ApiManager refresh token for user id 5", async () => {
  const res = await apiManager.get("/assessment/fetch/all");
  expect(res.status).toBe(200);
});