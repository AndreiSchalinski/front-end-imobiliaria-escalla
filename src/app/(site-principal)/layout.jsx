import "../../style/global.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Page home",
  description: "Essa página é home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
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
