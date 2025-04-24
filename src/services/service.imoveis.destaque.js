import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("/categorias/imoveis")
    .then((resp) => resp);
};

export const getImovel = async (idImovel) => {
  return customAxios()
    .get(`/imovel/${idImovel}`)
    .then((resp) => resp);
};
