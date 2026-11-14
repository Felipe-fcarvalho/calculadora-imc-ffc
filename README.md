# Projeto pessoal sobre cálculo de IMC
- Código feito sob orientação dos vídeos do canal CFB cursos (YT), aprimorado com IA.

# Calculadora de IMC

Aplicação web para calcular o **Índice de Massa Corporal (IMC)**, classificar o resultado em uma tabela com destaque visual e manter um **histórico dos cálculos** salvo no navegador.

Projeto de estudo para praticar **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**.

## Funcionalidades

- Cálculo do IMC a partir de peso (kg) e altura (m)
- Aceita vírgula ou ponto como separador decimal (`1,75` ou `1.75`)
- Validação de campos vazios antes de calcular
- Tabela de classificação com a faixa correspondente destacada por cor
- Página de histórico com data, peso, altura e IMC de cada cálculo
- Botão para limpar o histórico
- Dados persistidos no `localStorage`, sem necessidade de backend

## Classificação

A fórmula utilizada é:

```
IMC = peso / (altura × altura)
```

| IMC            | Classificação        |
| -------------- | -------------------- |
| Abaixo de 18,5 | Abaixo do peso       |
| 18,5 a 24,9    | Peso normal          |
| 25 a 29,9      | Sobrepeso            |
| 30 a 34,9      | Obesidade Grau I     |
| 35 a 39,9      | Obesidade Grau II    |
| 40 ou mais     | Obesidade Grau III   |

> O IMC é apenas um indicador de triagem e não substitui a avaliação de um profissional de saúde.

## Tecnologias

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm

### Passo a passo

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entre na pasta do projeto
cd calc_imc

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Gera a versão de produção          |
| `npm run start` | Executa a versão de produção       |
| `npm run lint`  | Verifica o código com o ESLint     |

## Estrutura do projeto

```
calc_imc/
├── app/
│   ├── layout.tsx            # Layout raiz
│   ├── page.tsx              # Página inicial (calculadora)
│   ├── globals.css           # Estilos globais e classes de destaque
│   └── data-imc/
│       └── page.tsx          # Página de histórico (/data-imc)
└── src/
    ├── calculadora_imc/
    │   └── imc.tsx           # Componente principal: estado e cálculo
    ├── components/
    │   ├── Formulario.tsx    # Campo de entrada com label
    │   └── Tabela.tsx        # Tabela de classificação com destaque
    └── lib/
        └── historico.ts      # Leitura e gravação do histórico no localStorage
```

## Como funciona

- **`imc.tsx`** (Client Component) controla o peso e a altura com `useState`, calcula o IMC ao clicar em "Calcular" e salva o registro no histórico.
- **`Tabela.tsx`** recebe o IMC calculado e aplica a classe de cor na faixa correspondente.
- **`historico.ts`** concentra o acesso ao `localStorage`.
- **`app/data-imc/page.tsx`** lê o histórico com `useSyncExternalStore`, o que evita erro de hidratação no Next.js e dispensa `setState` dentro de `useEffect`.

## Conceitos praticados

- Roteamento por arquivos no App Router (`page.tsx`)
- Client Components com `"use client"`
- Tipagem de props com `interface`, sem uso de `any`
- Estado derivado e renderização condicional
- Navegação com `Link` do Next.js
- Persistência no navegador com `localStorage`
- Leitura de fontes externas de dados com `useSyncExternalStore`

## Limitações

O histórico fica salvo apenas no navegador e no dispositivo em que foi gerado. Limpar os dados do navegador apaga os registros.

## Autor

**Felipe F. Carvalho**