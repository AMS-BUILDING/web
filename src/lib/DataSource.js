import axios from "axios";
const BASE_URL = "http://103.130.212.222:8080/api";
export const doPost = async (path, headers, formData) => {
  return axios({
    url: BASE_URL + path,
    method: "POST",
    headers: headers,
    data: formData,
  });
};

export const doGet = async (path, headers) => {
  return axios({
    url: BASE_URL + path,
    method: "GET",
    headers: headers,
  });
};

export const doPut = async (path, headers, formData) => {
  return axios({
    url: BASE_URL + path,
    method: "PUT",
    headers: headers,
    data: formData,
  });
};
export const doDelete = async (path) => {
  return axios({
    url: BASE_URL + path,
    method: "DELETE",
  });
};
