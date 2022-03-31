import axios, { AxiosRequestConfig } from "axios";

/* need to use https or you will 
   get Redirect is not allowed 
   for a preflight request error. 
*/

const baseUrl = "https://rntrackserver.vercel.app"; //http://"localhost:8080";

export type UserCredential = {
  email: string;
  password: string;
};
export type AuthResponse = {
  token: string;
};

const trackSvc = axios.create({
  baseURL: baseUrl,
});

const setRequestConfig = async (config: AxiosRequestConfig) => {
  // if (token && config.headers) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  //if (config.headers) config.headers["Access-Control-Allow-Origin"] = "true";

  return config;
};

trackSvc.interceptors.request.use(setRequestConfig);

export const signup = async (cred: UserCredential) => {
  console.log("cred", cred);
  const res = await trackSvc.post<AuthResponse>("/signup", cred);
  return res.data;
};

export const signin = async (cred: UserCredential) => {
  console.log("cred", cred);
  const res = await trackSvc.post("/signin", cred);
  console.log(res);
  return res.data;
};
