import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("http://escallaimoveis.com:8080/imoveis/altaprocura")
    .then((imovel) => imovel);
};
