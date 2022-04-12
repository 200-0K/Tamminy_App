import { ApiManager } from "./ApiManager";
import { SymptomApi } from "./SymptomApi";
import { DiseaseApi } from "./DiseaseApi";

let apiManager;
beforeAll(() => {
  apiManager = ApiManager({
    baseUrl: "http://localhost",
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