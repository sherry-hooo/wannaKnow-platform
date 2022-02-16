import axios from "axios";

const apiClient = axios.create({
  // headers: {
  //   Cookie: "__Host-GAPS=1:qGIjQYQiXqDfEXbXuXeFphRgD2GjZg:4Lh8zYJ1uoA9W6Jl",
  // },
});

export default {
  getWannaKnowData() {
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbzzvNgatFr9z_NmUEQ-O5LbV0zmFuHbI39rqhMVu7LpFrxPnTOxqmpmLO6YoP9kVQv8/exec",
      {
        params: {},
      }
    );
  },
};
