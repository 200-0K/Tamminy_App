import { ApiManager } from "./ApiManager";
import { AssessmentApi } from "./AssessmentApi";

const apiManager = ApiManager({
  baseUrl: "http://localhost/api/v1",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkxODc5NTcsImV4cCI6MTY0OTE4ODg1NywiZGF0YSI6eyJpZCI6NX19.alA7Qd5bzUadtvO1c3mXf0odAzDBtrvrF51W-nVCC6A"
});
const assessmentApi = AssessmentApi(apiManager);

test("Get all assessments for the expired token of user id 5", async () => {
  const res = await assessmentApi.getAll();
  expect(res).toBeDefined();
});