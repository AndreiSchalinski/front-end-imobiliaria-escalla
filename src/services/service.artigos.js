import customAxios from "./serive.customAxios";

export const getArtigos = async () => {
  const resp = customAxios()
    .get("/artigo/list")
    .then((resp) => resp);
  return resp;
};
