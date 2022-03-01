import axios from "axios";

const apiClient = axios.create({
  // headers: {
  //   Cookie: "__Host-GAPS=1:qGIjQYQiXqDfEXbXuXeFphRgD2GjZg:4Lh8zYJ1uoA9W6Jl",
  // },
});

const categoryQuery = {
  專案經驗: "project",
  學習小心得: "learning",
  技術剖析: "technic",
  職場工作: "career",
  生活頻道: "life",
};
export default {
  getWannaKnowByCategory(params) {
    if (params.category === "全部") {
      delete params["category"];
    } else {
      params["category"] = categoryQuery[params["category"]];
    }
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbyL_N-SK7iwC5Cwydj8gL1zQJxtK9Qf5wsc3HnjZFC-yo1wFKcHO9vyh_dQSh1H7s2I/exec?",
      {
        params: params,
      }
    );
  },
  getWannaKnowByTag(params) {
    console.log(params);
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
  getComments(wanna_know_id) {
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbwNKoMxg2VJP4dXk4iAGRxsnUIEySV7r3WOm7gWHb7rbiZW2t3DAEmlCWW1QfHFj_Fu3Q/exec",
      { params: { wanna_know_id } }
    );
  },
};

// function filterEmptyParams(queryParams) {
//   return queryParams.reduce((acc, obj) => {
//     for (const key in obj) {
//       if (obj[key]) {
//         acc[key] = obj[key];
//       }
//     }
//     return acc;
//   }, {});
// }
