import axios from "axios";

const customAxios = (contentType, responseType) => {
  const token = JSON.parse(localStorage.getItem("user"));

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
    },
    responseType: responseType || "json",
  });

  return axiosInstance;
};

export default customAxios;
