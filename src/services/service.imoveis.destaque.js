import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  const resp = customAxios()
    .get("/categorias/dashboard/list")
    .then((resp) => resp);
  return resp;
};

export const getImovel = async (idImovel) => {
  const { data } = customAxios()
    .get(`/imovel/${idImovel}`)
    .then((resp) => resp);
  return data;
};
