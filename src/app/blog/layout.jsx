import "../../style/global.css";
import "@/style/site-blog.css"
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const metadata = {
  title: "Page Blog",
  description: "Essa página é blog",
};

export default function Hoome({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
        />
      </head>

      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
