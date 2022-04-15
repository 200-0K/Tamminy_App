import { AxiosInstance } from "axios";

let isInstantiated = false;
let instance;

/**
 *
 * @param {AxiosInstance} axios
 * @returns {{
 *  save: (feedback: string, questionId: ?number) => Promise<boolean>,
 *  RESPONSE_CODES: RESPONSE_CODES
 * }}
 */
export const FeedbackApi = axios => {
  if (isInstantiated) {
    if (axios) throw new Error("Instance has already been instantiated");
    return instance;
  }

  instance = {
    save: async (feedback, questionId) => {
      if (typeof feedback !== "string") return false;

      const params = {feedback};
      if (questionId) params["symptomid"] = questionId;

      try{
        await axios.post(
          "/feedback/add",
          new URLSearchParams(params).toString(),
          { headers: { "Content-Type": "application/x-www-form-urlencoded;" } }
        );
        return true;
        
      } catch (e) {return false;}
    },
  };

  isInstantiated = true;
  return instance;
};
