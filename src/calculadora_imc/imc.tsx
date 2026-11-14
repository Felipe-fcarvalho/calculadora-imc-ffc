"use client";

import { useState } from "react";
import Formulario from "../components/Formulario";
import Tabela from "../components/Tabela";
import Link from "next/link";
import { salvarRegistro } from "../lib/historico";

export default function Imc() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [imc, setImc] = useState<number>(0);

  function calcular() {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (!pesoNum || !alturaNum) {
      alert("Preencha peso e altura");
      return;
    }

    const res = pesoNum / (alturaNum * alturaNum);
    setImc(res);

    salvarRegistro({
      id: Date.now(),
      peso: pesoNum,
      altura: alturaNum,
      imc: res,
      data: new Date().toLocaleString("pt-BR"),
    })
  }

  return (
    <div className="flex flex-col border border-black gap-5 w-125 m-5">
      <p className="w-full text-center bg-zinc-400 font-bold text-lg">
        Cálculo do IMC
      </p>
      <Formulario label="peso" state={peso} funcState={setPeso} />
      <Formulario label="altura" state={altura} funcState={setAltura} />
      <button
        onClick={calcular}
        className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer"
      >
        Calcular
      </button>
      <Link
        href="/data-imc"
        className="bg-green-900 text-white text-center mx-2 p-1 rounded-lg cursor-pointer"
      >
        Salvar
      </Link>
      <Tabela destaque={imc}></Tabela>
      <p className="bg-zinc-100 p-1 text-center">
        Resultado: <strong>{imc.toFixed(1)}</strong>
      </p>
    </div>
  );
}
