import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const openFacyboxImages = (listImagens, index) => {
  const items = listImagens.map((src) => ({
    src,
    type: "image",
    opts: {
      // Defina opções de zoom ou de transição aqui
      zoom: true, // Habilita o zoom
      caption: "Imagem ampliada", // Se desejar uma legenda
      width: "1600px", // Ajusta a largura da imagem para a tela
      height: "1200px", // Ajusta a altura automaticamente para manter a proporção
    },
  }));

  NativeFancybox.show(items, {
    Carousel: {
      infinite: true,
    },
    startIndex: index,
  });
};
