import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "588ebea849ad44178a3e6b2a79061ef1",
  },
});
