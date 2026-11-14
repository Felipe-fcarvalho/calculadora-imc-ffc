interface TabelaImcProps {
  destaque: number;
}

const faixas = [
  {
    nome: "Abaixo do peso",
    faixa: "Abaixo de 18.5",
    min: 0,
    max: 18.5,
    classe: "destaque-alerta",
  },
  {
    nome: "Peso normal",
    faixa: "Entre 18.5 e 24.9",
    min: 18.5,
    max: 25,
    classe: "destaque-normal",
  },
  {
    nome: "Sobrepeso",
    faixa: "Entre 25 e 29.9",
    min: 25,
    max: 30,
    classe: "destaque-alerta",
  },
  {
    nome: "Obesidade Grau I",
    faixa: "Entre 30 e 34.9",
    min: 30,
    max: 35,
    classe: "destaque-alerta",
  },
  {
    nome: "Obesidade Grau II",
    faixa: "Entre 35 e 39.9",
    min: 35,
    max: 40,
    classe: "destaque-grave",
  },
  {
    nome: "Obesidade Grau III",
    faixa: "Acima de 40",
    min: 40,
    max: Infinity,
    classe: "destaque-grave",
  },
];

export default function Tabela({ destaque }: TabelaImcProps) {
  return (
    <div className="mx-2 mb-2">
      <div className="flex">
        <div className="w-1/2 border p-1 text-center font-bold">
          Classificação
        </div>
        <div className="w-1/2 border p-1 text-center font-bold">IMC</div>
      </div>
      
      {faixas.map((f) => {
        const ativa = destaque >= f.min && destaque < f.max;
        return (
          <div key={f.nome} className={`flex ${ativa ? f.classe : ""}`}>
            <div className="w-1/2 border p-1">{f.nome}</div>
            <div className="w-1/2 border p-1">{f.faixa}</div>
          </div>
        );
      })}
    </div>
  );
}
