import axios from "axios";

const instance = axios.create({
  // the API (cloud function ) URL
  baseURL: "https://us-central1-clone-1035b.cloudfunctions.net/api",
  // API url for testing
  // baseURL: "http://localhost:5001/clone-1035b/us-central1/api",
});

export default instance;
