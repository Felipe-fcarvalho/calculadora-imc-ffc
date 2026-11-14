"use client"

import { useMemo, useSyncExternalStore } from "react"
import Link from "next/link"
import { assinar, lerHistoricoBruto, limparHistorico, RegistroImc } from "@/src/lib/historico"

export default function DadosImc(){
  const bruto = useSyncExternalStore(
    assinar,
    lerHistoricoBruto,
    () => "[]"
  );

  const registros: RegistroImc[] = useMemo(() => JSON.parse(bruto), [bruto]);

  return (
    <div className="m-5 w-125">
      <h1 className="text-lg font-bold mb-3">Histórico de IMC</h1>

      {registros.length === 0 ? (
        <p>Nenhum cálculo salvo ainda.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-1">Data</th>
              <th className="border p-1">Peso</th>
              <th className="border p-1">Altura</th>
              <th className="border p-1">IMC</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((r) => (
              <tr key={r.id}>
                <td className="border p-1">{r.data}</td>
                <td className="border p-1">{r.peso}</td>
                <td className="border p-1">{r.altura}</td>
                <td className="border p-1">{r.imc.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex gap-2 mt-3">
        <Link
          href="/"
          className="bg-zinc-800 hover:bg-amber-950 text-white p-1 rounded-lg px-3 cursor-pointer"
        >
          Voltar
        </Link>
        <button
          onClick={limparHistorico}
          className="bg-red-800  hover:bg-amber-950 text-white p-1 rounded px-3 cursor-pointer"
        >
          Limpar histórico
        </button>
      </div>
    </div>
  );
}