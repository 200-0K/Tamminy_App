import { AxiosInstance, AxiosResponse } from "axios";

const RESPONSE_CODES = {
  predict: {
    success: 200,
    saved: 201,
    lowAccuracy: 204,
    invalid: 400,
  },
  getQuestions: {
    success: 200,
    noQuestions: 204,
    invalid: 400,
  },
};

let isInstantiated = false;
let instance;

/**
 *
 * @param {AxiosInstance} axios
 * @returns {{
 *  get: (id) => Promise<AxiosResponse<any, any>>,
 *  getAll: () => Promise<AxiosResponse<any, any>>,
 *  predict: (symptoms: number[]) => Promise<AxiosResponse<any, any>>,
 *  getQuestions: (symptoms: number[]) => Promise<AxiosResponse<any, any>>,
 *  RESPONSE_CODES: RESPONSE_CODES
 * }}
 */
export const AssessmentApi = axios => {
  if (isInstantiated) {
    if (axios) throw new Error("Instance has already been instantiated");
    return instance;
  }

  instance = {
    RESPONSE_CODES,
    getAll: async () => {
      const res = await axios.get("/assessment/fetch/all");
      return res.data;
    },
    get: async id => {
      const res = await axios.get(`/assessment/fetch?id=${id}`);
      res.data.diseases.sort((a, b) => b.percentage - a.percentage);
      return res.data;
    },
    predict: async symptoms => {
      const res = await axios.post(
        "assessment/predict",
        symptoms.map(id => `symptom[]=${id}`).join("&"),
        { headers: { "Content-Type": "application/x-www-form-urlencoded;" } }
      );
      res.data?.diseases?.sort((a, b) => b.percentage - a.percentage);
      return res;
    },
    getQuestions: async symptoms => {
      const res = await axios.get(
        `assessment/fetch/questions?${symptoms.map(id => `symptom[]=${id}`).join("&")}`
      );
      return res;
    },
  };

  isInstantiated = true;
  return instance;
};
