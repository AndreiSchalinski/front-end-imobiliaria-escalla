import axios from "axios";

const customAxios = (contentType, responseType) => {
  
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      "Content-Type": contentType ? contentType : "application/json",
    },
    responseType: responseType || "json",
  });

  return axiosInstance;
};

export default customAxios;
