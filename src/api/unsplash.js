import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID M_dnp1EIES4joBg4OChtCKq5lRMygl5t5JWmE2856d4",
  },
});
