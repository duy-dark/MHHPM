import Api from "./api";
const login = (params) => {
  return Api.post("/api/customer", params).then((res) => res.data);
};

const getFriends = () => {
  return Api.get("/api/user/friends").then((res) => res.data);
};

const getUserInfo = () => {
  return Api.get("/api/user/info").then((res) => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  getFriends,
  getUserInfo,
};
