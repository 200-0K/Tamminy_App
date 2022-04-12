import { ApiManager } from "./ApiManager";
import { AccountApi } from "./AccountApi";
import { SymptomApi } from "./SymptomApi";
import { DiseaseApi } from "./DiseaseApi";

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
    dob: new Date().toISOString(),
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
