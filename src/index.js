import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Possibilites of state: Entrada, Rodando, Fim.
  const [estado, setEstado] = useState("Entrada");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "Entrada") {
    return (
      <div>
        <button onClick={iniciarJogo}>Inicie o jogo!</button>
        <h2>Pense em um número</h2>
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("Fim");
  };

  if (estado === "Fim") {
    return (
      <div>
        <p>
          Seu numero {palpite} foi descoberto em {numPalpites} chutes{" "}
        </p>
        <button onClick={iniciarJogo}>Reiniciar</button>
      </div>
    );
  }

  return (
    <div className="jogoAdivinhacao">
      <h2>Bem vindo ao jogo da Adivinhação</h2>

      <h3>Palpite da máquina: {palpite}</h3>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
      <h4>
        Minimo: {min} &nbsp; Máximo: {max}
      </h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
