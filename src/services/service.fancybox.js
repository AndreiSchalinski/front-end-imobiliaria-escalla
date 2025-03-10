import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const openFacyboxImages = (listImagens, index) => {
  const items = listImagens.map((src) => ({
    src,
    type: "image",
  }));

  NativeFancybox.show(items, {
    Carousel: {
      infinite: true,
    },
    startIndex: index,
  });
};
