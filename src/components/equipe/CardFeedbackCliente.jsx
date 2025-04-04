import { getIcon } from "@/assets/icons";

export default function CardFeedbackCliente() {
  return (
    <div className="card-feedback-cliente-equipe">
      <ul>
        <li>
          <p className="card-feedback-cliente-equipe-nome">
            Octavio Deiroz Neto
          </p>
        </li>
        <li>
          <p className="card-feedback-cliente-equipe-papel">Comprador</p>
        </li>
        <li>
          <p className="card-feedback-cliente-equipe-relato">
            {getIcon().iconAbreAspas} Atendimento impecável, principalmente do
            corretor Flávio. Comprei uma casa ano passado e foram muito
            prestativos e extremamente rápidos com todos os trâmites. Nota 10!{" "}
            {getIcon().iconFechaAspas}
          </p>
        </li>
      </ul>
    </div>
  );
}
