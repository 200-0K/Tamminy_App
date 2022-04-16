import { ApiManager } from "./ApiManager";
import { AssessmentApi } from "./AssessmentApi";

const apiManager = ApiManager({
  baseUrl: "http://localhost/api/v1",
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTAxNDU1NjMsImV4cCI6MTY1MDE0NjQ2MywiZGF0YSI6eyJpZCI6MX19.zrXpIsAqZn7ieTLRZi5Fl1SGx7PWScYyLdgqX56VgSA"
});
const assessmentApi = AssessmentApi(apiManager);

test("Get all assessments for the expired token of user id 1", async () => {
  const res = await assessmentApi.getAll();
  expect(res).toBeDefined();
});