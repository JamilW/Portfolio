import axios from "axios";
export default {
  // Save message to the database
  saveMessage: function (entry) {
    return axios.post("/api/entry", entry);
  }
};