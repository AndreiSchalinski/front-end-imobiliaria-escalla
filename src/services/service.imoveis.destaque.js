import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("/categorias/dashboard/list")
    .then((resp) => resp);
};

export const getImovel = async (idImovel) => {
  return customAxios()
    .get(`/imovel/${idImovel}`)
    .then((resp) => resp);
};
