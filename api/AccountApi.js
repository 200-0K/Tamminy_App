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
    alreadyExists: 409,
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
 *  login: (email: string, password: string) => responseCodeNumber,
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
      data.dob = new Date(data.dob).toISOString();
      try {
        const res = await axios.post(
          "/account/register", 
          new URLSearchParams(data).toString(), 
          { headers: { "Content-Type": "application/x-www-form-urlencoded;" }, _inactiveToken: true}
        );
        return res.status;      
        
      } catch (e) {return e.response?.status; }
    },
    verify: async otp => {
      try {
        const res = await axios.post(
          "/account/verify",
          new URLSearchParams({ otp }).toString(),
          { headers: { "Content-Type": "application/x-www-form-urlencoded;" } }
        );
        return res.status;
      
      } catch (e) {return e.response?.status;}
    },
    login: async (email, password) => {
      try {
        const res = await axios.post(
          "/account/login",
          new URLSearchParams({ email, password }).toString(),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        return res.status;
      
      } catch (e) {return e.response?.status;}
    },
  };

  isInstantiated = true;
  return instance;
};
