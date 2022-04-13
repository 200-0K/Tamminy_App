import { AxiosInstance } from "axios";

const RESPONSE_CODES = {
  register: {
    success: 200,
    invalid: 400,
    alreadyExists: 409,
  },
  verify: {
    success: 201,
    incorrect: 400,
    unauth: 401,
  },
  login: {
    success: 200,
    incorrect: 401,
  },
};

let isInstantiated = false;
let instance;

/**
 *
 * @param {AxiosInstance} axios
 * @returns {{
 *  register: (data: {email, password, dob, name, gender}) => responseCodeNumber,
 *  verify: (otp: number) => responseCodeNumber,
 *  RESPONSE_CODES: RESPONSE_CODES
 * }}
 */
export const AccountApi = axios => {
  if (isInstantiated) {
    if (axios) throw new Error("Instance has already been instantiated");
    return instance;
  }

  instance = {
    RESPONSE_CODES,
    register: async data => {
      let res;
      try {
        res = await axios.post("/account/register", new URLSearchParams(data), {
          headers: { "Content-Type": "application/x-www-form-urlencoded;" },
        });
      } catch (e) {
        return e.response?.status;
      }
      return res.status;
    },
    verify: async otp => {
      let res;
      try {
        res = await axios.post(
          "/account/verify",
          new URLSearchParams({ otp }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded;" } }
        );
      } catch (e) {
        return e.response?.status;
      }
      return res.status;
    },
    login: async (email, password) => {
      let res;
      try {
        res = await axios.post(
          "/account/login",
          new URLSearchParams({ email, password }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
      } catch (e) {
        return e.response?.status;
      }
      return res.status;
    },
  };

  isInstantiated = true;
  return instance;
};
