import "../../style/site-principal.css";
import "../../style/global.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "Page home",
  description: "Essa página é home page",
};

export default function RootLayout({ children }) {
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
