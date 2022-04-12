import {AxiosInstance, AxiosResponse} from "axios";

let isInstantiated = false;
let instance;

/**
 * 
 * @param {AxiosInstance} axios 
 * @returns {{
 *  getAllSymptoms: () => Promise<AxiosResponse<any, any>>,
 *  getSymptom: (id: number) => Promise<AxiosResponse<any, any>>
 * }}
 */
export const SymptomApi = axios => {
  if (isInstantiated) {
    if (axios) throw new Error("Instance has already been instantiated")
    return instance;
  }

  instance = {
    getAll: async () => {
      const res = await axios.get("/symptom/fetch/all");
      return res.data;
    },
    get: async id => {
      const res = await axios.get(`/symptom/fetch?id=${id}`);
      return res.data;
    }
  }

  isInstantiated = true;
  return instance;
}