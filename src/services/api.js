import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json ",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

const addTokenToRequest = async (req) => {
  const token = localStorage.getItem("PRTK");
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;