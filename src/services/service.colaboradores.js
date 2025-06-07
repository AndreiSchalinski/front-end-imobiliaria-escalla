import customAxios from "./serive.customAxios";

export const getColaboradores = async () => {
  const resp = customAxios()
    .get("/colaborador/list")
    .then((resp) => resp);
  return resp;
};
