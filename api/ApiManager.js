import axios from "axios";
import { AxiosInstance } from "axios";

const updateAxiosToken = (
  axiosInstance,
  token,
  tokenChangedCallback = () => {}
) => {
  axiosInstance.defaults.headers["Authorization"] = token
    ? `Bearer ${token}`
    : "";
  tokenChangedCallback(token);
};

let isInstantiated = false; // important
let axiosInstance;
/**
 * A singleton function for getting an instance of an `ApiManager`
 * @param {{token:string, baseUrl:string, tokenChangedCallback:function}} options only used for first initilaizing
 * @returns {AxiosInstance}
 */
export const ApiManager = options => {
  if (isInstantiated) {
    if (options) throw new Error("Instance has already been instantiated");
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: options.baseUrl,
  });
  if (options.token) updateAxiosToken(axiosInstance, options.token);

  axiosInstance.interceptors.response.use(
    response => {
      if (response.data.token)
        updateAxiosToken(
          axiosInstance,
          response.data.token,
          options.tokenChangedCallback
        );
      return response;
    },
    async error => {
      const status = error.response ? error.response.status : null;

      // TODO: if status=null then user/server is offline?

      if (status === 401) {
        updateAxiosToken(axiosInstance, null, options.tokenChangedCallback);
      } else if (error.response.data.token) {
        updateAxiosToken(
          axiosInstance,
          error.response.data.token,
          options.tokenChangedCallback
        );
        try {
          error.config.headers["Authorization"] = axiosInstance.defaults.headers["Authorization"];
          const res = await axios.request(error.config);
          return res;
        } catch (e) { error = e; }
      }

      return Promise.reject(error);
    }
  );

  isInstantiated = true;
  return axiosInstance;
};
