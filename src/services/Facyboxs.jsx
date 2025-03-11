"use client";

import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

function Fancybox(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || '[data-fancybox]';
    const options = {
      ...props.options,
      // Configurações para garantir que o botão de zoom fique visível
      buttons: ['zoom', 'close', 'slideshow', 'fullscreen', 'share'], // Exemplo de como incluir o botão de zoom
      loop: true, // Permite navegar nas imagens em loop
      // Configuração adicional que pode ser útil
      protect: true, // Para proteger as imagens contra download (opcional)
      idleTime: 3, // Evita que o Fancybox se feche após um curto período de inatividade (ajuste conforme necessário)
      ...props.options,
    };

    // Inicializa o Fancybox com as opções configuradas
    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.options, props.delegate]);

  return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
