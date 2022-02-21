import axios from "axios";

const apiClient = axios.create({
  // headers: {
  //   Cookie: "__Host-GAPS=1:qGIjQYQiXqDfEXbXuXeFphRgD2GjZg:4Lh8zYJ1uoA9W6Jl",
  // },
});

const categoryQuery = {
  全部: "",
  專案經驗: "project",
  學習小心得: "learning",
  技術剖析: "technic",
  職場工作: "career",
  生活頻道: "life",
};
export default {
  getWannaKnowData(page, category, tags, orderBy) {
    const params = filterEmptyParams(
      { page: page },
      { category: categoryQuery[category] },
      { tags: tags },
      { orderBy: orderBy }
    );
    console.log(params);
    return apiClient.get(
      "https://script.google.com/macros/s/AKfycbyL_N-SK7iwC5Cwydj8gL1zQJxtK9Qf5wsc3HnjZFC-yo1wFKcHO9vyh_dQSh1H7s2I/exec?",
      {
        params: params,
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

function filterEmptyParams(...queryParams) {
  return queryParams.reduce((acc, obj) => {
    for (const key in obj) {
      if (obj[key]) {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
}
