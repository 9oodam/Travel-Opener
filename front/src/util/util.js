import axios from "axios";

const ipUrl = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "http://hyunss.com/api",
  withCredentials: true,
});
export { ipUrl };
