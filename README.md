This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuralção Nginx servidor WEB reverso

Passos:
Instalar o Nginx no seu servidor VPS:

Se ainda não tiver o Nginx instalado no seu VPS, instale-o usando os seguintes comandos:

sudo apt update
sudo apt install nginx

Configurar o Nginx como proxy reverso:

Crie ou edite o arquivo de configuração do Nginx para configurar o proxy reverso. O arquivo geralmente está localizado em /etc/nginx/sites-available/default ou você pode criar um novo arquivo dentro do diretório /etc/nginx/sites-available/.

Edite o arquivo de configuração para algo assim:

sudo nano default

server {
    listen 80;
    server_name escallaimoveis.com www.escallaimoveis.com;

    location / {
        proxy_pass http://127.0.0.1:3000;  # Direciona para o seu servidor Next.js rodando na porta 3000
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

Testar e reiniciar o Nginx:

Após configurar o Nginx, é importante testar a configuração para garantir que não há erros de sintaxe. Execute:

sudo nginx -t

Se não houver erros, reinicie o Nginx para aplicar as configurações:

sudo systemctl restart nginx

## Configuração para HTTPS (Opcional):

Configuração para HTTPS (Opcional):
Se você também deseja configurar HTTPS para o seu domínio (o que é altamente recomendado para segurança), você pode usar o Certbot com o Nginx. Execute o seguinte comando para configurar o SSL automaticamente:

Isso irá configurar o SSL automaticamente e fazer o redirecionamento de HTTP para HTTPS.

sudo apt install certbot python3-certbot-nginx

sudo certbot --nginx -d escallaimoveis.com -d www.escallaimoveis.com

