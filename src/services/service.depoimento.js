import customAxios from "./serive.customAxios";

export const getDepoimentos = async () => {
  const resp = customAxios()
    .get("/depoimento/list")
    .then((resp) => resp);
  return resp;
};
