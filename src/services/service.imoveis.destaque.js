import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {
  return customAxios()
    .get("http://localhost:8080/imoveis/altaprocura")
    .then((imovel) => {console.log(imovel)});
};
