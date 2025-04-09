import Image from "next/image";

export default function ArtigoSection({ artigo }) {
  return (
    <>
      <ul>
        <li>
          <h1>{artigo.introducao.titulo}</h1>
        </li>
        <li>
          <Image src={artigo.introducao.imagem} alt="" layout="intrinsic" />
        </li>
        <li>
          {artigo.introducao.textos.map((texto, i) => {
            return <p key={i}>{texto}</p>;
          })}
        </li>
        <li>
          {artigo.sections.map((section) => {
            return section;
          })}
        </li>
      </ul>
    </>
  );
}
