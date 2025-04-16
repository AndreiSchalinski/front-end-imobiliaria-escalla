import customAxios from "./serive.customAxios";

export const getImoveisDestaques = async () => {

  console.log(process.env.NEXT_PUBLIC_API_BASE_URL)

  return customAxios()
    .get("/imoveis/altaprocura")
    .then((resp) => resp)
};
