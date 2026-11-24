// Dados falsos (mock) — no futuro virão de uma API.
export const usuario = { nome: 'Ana' }

export const conta = {
  saldo: 2847.53,
  faturaAtual: 612.9,
  limiteDisponivel: 3387.1,
}

export type Transacao = {
  id: number
  descricao: string
  valor: number // negativo = saída, positivo = entrada
  data: string
  tipo: 'pix' | 'cartao' | 'boleto' | 'deposito'
}

export const transacoes: Transacao[] = [
  { id: 1, descricao: 'Pix recebido — Maria', valor: 150, data: 'Hoje', tipo: 'pix' },
  { id: 2, descricao: 'Mercado Bom Preço', valor: -89.4, data: 'Hoje', tipo: 'cartao' },
  { id: 3, descricao: 'Conta de luz', valor: -132.77, data: 'Ontem', tipo: 'boleto' },
  { id: 4, descricao: 'Salário', valor: 3200, data: '05 nov', tipo: 'deposito' },
]

export const formatarBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
