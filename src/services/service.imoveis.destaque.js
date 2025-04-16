import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {

  return customAxios()
    .get("/imoveis/altaprocura")
    .then((resp) => resp)
};
