import axios from "axios";

const apiClient = axios.create({
  // headers: {
  //   Cookie: "__Host-GAPS=1:qGIjQYQiXqDfEXbXuXeFphRgD2GjZg:4Lh8zYJ1uoA9W6Jl",
  // },
});

export default {
  getWannaKnowData(page) {
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbwozbAxlvnE2VBAGXmsoX2w-e8UCixobZ7JeS9J2BJ5gustU7JNP00-9X4ptXWO4RzS/exec",
      {
        params: {
          page: page,
        },
      }
    );
  },
  getWannaKnowDataByYear(year) {
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbyL_N-SK7iwC5Cwydj8gL1zQJxtK9Qf5wsc3HnjZFC-yo1wFKcHO9vyh_dQSh1H7s2I/exec",
      {
        params: {
          year: year,
        },
      }
    );
  },
};
