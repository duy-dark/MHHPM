// import 
const setup = (instance) => {
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setup
}
