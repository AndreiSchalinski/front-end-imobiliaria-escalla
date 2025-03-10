import CarouselLargeImovel from "@/components/site-principal/CarouselLargeImovel";

const listImgs = [
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-26-1723828636.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-22-1723828635.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-28-1723828636.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-25-1723828634.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-24-1723828634.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-20-1723828633.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-23-1723828633.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-19-1723828632.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-12-1723828628.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-18-1723828631.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-11-1723828627.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-17-1723828630.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-16-1723828630.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-9-1723828626.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-7-1723828625.webp",
  "https://imobillesite.s3.sa-east-1.amazonaws.com/ventures-photo/August2024/mueller-ocean-club-7-1723828625.webp",
];

export default function SitePrincipalCarouselInformacoesImovel() {
  return (
    <div className="testekk">
      <CarouselLargeImovel listImgs={listImgs}/>
    </div>
  );
}
