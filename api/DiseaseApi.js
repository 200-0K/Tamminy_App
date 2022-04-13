import { AxiosInstance, AxiosResponse } from "axios";

let isInstantiated = false;
let instance;

/**
 *
 * @param {AxiosInstance} axios
 * @returns {{
 *  getAll: () => Promise<AxiosResponse<any, any>>,
 *  get: (id: number) => Promise<AxiosResponse<any, any>>
 * }}
 */
export const DiseaseApi = axios => {
  if (isInstantiated) {
    if (axios) throw new Error("Instance has already been instantiated");
    return instance;
  }

  instance = {
    getAll: async () => {
      const res = await axios.get("/disease/fetch/all");
      return res.data;
    },
    get: async id => {
      const res = await axios.get(`/disease/fetch?id=${id}`);
      return res.data;
    },
  };

  isInstantiated = true;
  return instance;
};
