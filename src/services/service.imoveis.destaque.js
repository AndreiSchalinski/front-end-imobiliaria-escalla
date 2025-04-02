import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("https://escallaimoveis.com:8080/imoveis/altaprocura")
    .then((imovel) => {
      console.log(imovel);
    });
};
