import Vue from "vue";

import axios from "axios";

const resource = axios.create({
  baseURL: process.env.url, //call your URL API
  headers: {
    Authorization: "",
    Accept: "application/json",
  },
});

Vue.prototype.$http = resource;

export default resource;
