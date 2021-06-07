import axios from "axios";
import { host } from "../utils/constants";

export const api = axios.create({
  baseURL: `${host}`,
});
