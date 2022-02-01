import axios from "axios";

const apiClient = axios.create({
  baseURL: "googlesheet連結",
  withCredentials: false,
});

export default {
  getWannaKnowData() {
    return apiClient.get("/", {
      params: {
        // 放入參數
      },
    });
  },
};
