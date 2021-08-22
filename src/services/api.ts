import axios from "axios";

export default axios.create({
  baseURL:
    "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth",
});
