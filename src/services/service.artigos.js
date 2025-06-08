import customAxios from "./serive.customAxios";

export const getArtigos = async () => {
  const resp = customAxios()
    .get("/artigo/list")
    .then((resp) => resp);
  return resp;
};

export const getArtigo = async (id) => {
  const resp = await customAxios()
    .get(`/artigo/${id}`)
    .then((resp) => resp);
  return resp;
};
