import { ApiManager } from "./ApiManager";
import { AccountApi } from "./AccountApi";
import { SymptomApi } from "./SymptomApi";
import { DiseaseApi } from "./DiseaseApi";
import { AssessmentApi } from "./AssessmentApi";
import { FeedbackApi } from "./FeedbackApi";

let registerationData;

let apiManager;
beforeAll(() => {
  apiManager = ApiManager({
    baseUrl: "http://localhost/api/v1",
  });
});

describe("Account End-Point", () => {
  let accountApi;
  beforeAll(() => {
    accountApi = AccountApi(apiManager);
  });

  test("Instance already instantiated", () => {
    expect(() => AccountApi({})).toThrow();
  });

  test("Get an instance", () => {
    expect(AccountApi()).toBeDefined();
  });

  const data = {
    email: `${Math.random().toString(32).slice(2)}@tester.com`,
    password: "123123123465456464",
    dob: new Date(
      new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 2
    ).toISOString(),
    name: `Tester-${Math.random().toFixed(4).slice(2, 4)}`,
    gender: ["male", "female"][Math.round(Math.random())],
  };

  test("Register user", async () => {
    const res = await accountApi.register(data);
    expect(res).toBe(accountApi.RESPONSE_CODES.register.success);
  });

  test("Verify user OTP [Incorrect]", async () => {
    const res = await accountApi.verify(0);
    expect(res).toBe(accountApi.RESPONSE_CODES.verify.incorrect);
  });

  test("Verify user OTP", async () => {
    const res = await accountApi.verify(4000); //! Hardcoded OTP
    expect(res).toBe(accountApi.RESPONSE_CODES.verify.success);
  });

  test("Login", async () => {
    const prevToken = apiManager.defaults.headers.Authorization;
    const res = await accountApi.login(data.email, data.password);
    expect(res).toBe(accountApi.RESPONSE_CODES.login.success);
    expect(apiManager.defaults.headers.Authorization).not.toEqual(prevToken);
  });
});

describe("Assessment End-Point", () => {
  let assessmentApi;
  beforeAll(() => {
    assessmentApi = AssessmentApi(apiManager);
  });

  test("Instance already instantiated", () => {
    expect(() => AssessmentApi({})).toThrow();
  });

  test("Get an instance", () => {
    expect(AssessmentApi()).toBeDefined();
  });

  test("Get related questions", async () => {
    const res = await assessmentApi.getQuestions([1, 2]);
    expect(res.status).toBe(assessmentApi.RESPONSE_CODES.getQuestions.success);
  });

  let assessment;
  test("Predict [With Save]", async () => {
    const res = await assessmentApi.predict([1, 2]);
    expect(res.status).toBe(assessmentApi.RESPONSE_CODES.predict.saved);
    assessment = res.data;
  });

  test("Get all assessments", async () => {
    const data = await assessmentApi.getAll();
    expect(Array.isArray(data)).toBe(true);
    expect(data[0].id).toEqual(assessment.id);
  });

  test("Get assessment", async () => {
    const data = await assessmentApi.get(assessment.id);
    expect(data).toBeDefined();
    const index = Math.floor(Math.random() * data.diseases.length);
    expect(data.diseases.length).toEqual(assessment.diseases.length);
    expect(data.diseases[index].percentage).toEqual(
      assessment.diseases[index].percentage
    );
  });
});

describe("Feedback End-Point", () => {
  let feedbackApi;
  beforeAll(() => {
    feedbackApi = FeedbackApi(apiManager);
  });

  test("Instance already instantiated", () => {
    expect(() => FeedbackApi({})).toThrow();
  });

  test("Get an instance", () => {
    expect(FeedbackApi()).toBeDefined();
  });

  test("Submit feedback [Without ID]", async () => {
    const res = await feedbackApi.save("Very good program");
    expect(res).toBe(true);
  })

  test("Submit feedback [With Question ID]", async () => {
    const res = await feedbackApi.save("I believe this question is a little too broad", 1);
    expect(res).toBe(true);
  })
})

describe("Symptom End-Point", () => {
  let symptomApi;
  beforeAll(() => {
    symptomApi = SymptomApi(apiManager);
  });

  test("Instance already instantiated", () => {
    expect(() => SymptomApi({})).toThrow();
  });

  test("Get an instance", () => {
    expect(SymptomApi()).toBeDefined();
  });

  test("Get all symptoms", async () => {
    const res = await symptomApi.getAll();
    expect(res).toBeDefined();
    expect(Array.isArray(res)).toBe(true);
  });

  test("Get symptom id 1", async () => {
    const res = await symptomApi.get(1);
    expect(res).toBeDefined();
    expect(res.id).toBe(1);
    expect(res.diseases).toBeDefined();
    expect(res.images).toBeDefined();
  });
});

describe("Disease End-Point", () => {
  let diseaseApi;
  beforeAll(() => {
    diseaseApi = DiseaseApi(apiManager);
  });

  test("Instance already instantiated", () => {
    expect(() => DiseaseApi({})).toThrow();
  });

  test("Get an instance", () => {
    expect(DiseaseApi()).toBeDefined();
  });

  test("Get all diseases", async () => {
    const res = await diseaseApi.getAll();
    expect(res).toBeDefined();
    expect(Array.isArray(res)).toBe(true);
  });

  test("Get disease id 1", async () => {
    const res = await diseaseApi.get(1);
    expect(res).toBeDefined();
    expect(res.id).toBe(1);
    expect(res.symptoms).toBeDefined();
    expect(res.precautions).toBeDefined();
  });
});
