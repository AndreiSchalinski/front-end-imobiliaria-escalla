import { getIcon } from "@/assets/icons";

export default function CardFeedbackCliente({ depoimento }) {
  return (
    <div className="card-feedback-cliente-equipe">
      <ul>
        <li>
          <p className="card-feedback-cliente-equipe-nome">{depoimento.nome}</p>
        </li>
        <li>
          <p className="card-feedback-cliente-equipe-papel">
            {depoimento.ocupacao}
          </p>
        </li>
        <li>
          <p className="card-feedback-cliente-equipe-relato">
            {getIcon().iconAbreAspas} {depoimento.depoimento}{" "}
            {getIcon().iconFechaAspas}
          </p>
        </li>
      </ul>
    </div>
  );
}
