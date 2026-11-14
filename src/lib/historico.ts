export interface RegistroImc {
  id: number;
  peso: number;
  altura: number;
  imc: number;
  data: string;
}

const CHAVE = "historico-imc";
const ouvintes = new Set<() => void>();

function notificar() {
  ouvintes.forEach((fn) => fn());
}

export function assinar(callback: () => void) {
  ouvintes.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    ouvintes.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function lerHistoricoBruto(): string {
  return localStorage.getItem(CHAVE) ?? "[]";
}

export function salvarRegistro(registro: RegistroImc) {
  const atual: RegistroImc[] = JSON.parse(lerHistoricoBruto());
  localStorage.setItem(CHAVE, JSON.stringify([registro, ...atual]));
  notificar();
}

export function limparHistorico() {
  localStorage.removeItem(CHAVE);
  notificar();
}
