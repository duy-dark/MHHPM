import Api from "./api";

const getListFilmShowing = (params) => {
  return Api.get("/api/film", params).then((res) => res.data);
};

const getListFilmComming = (params) => {
  return Api.get("api/film/commingsoon", params).then((res) => res.data);
};

const postBookingInfo = (params) => {
  return Api.post("api/ticket", params).then((res) => res.data);
};
export default {
  getListFilmShowing,
  postBookingInfo,
};
