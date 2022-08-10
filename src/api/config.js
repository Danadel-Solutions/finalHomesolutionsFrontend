import axios from "axios";
const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL_LOCAL
    : process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
  baseURL: url,
});
export default axiosInstance;
