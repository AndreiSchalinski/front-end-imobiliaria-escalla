import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("https://escallaimoveis.com/api/imoveis/altaprocura")
    .then((imovel) => {console.log(imovel)})
};
