import { useState } from 'react'
import { Header } from './components/Header'
import { Saldo } from './components/Saldo'
import { AcoesRapidas } from './components/AcoesRapidas'
import { Cartao } from './components/Cartao'
import { Extrato } from './components/Extrato'
import { conta, transacoes, usuario } from './data/mock'

export default function App() {
  const [visivel, setVisivel] = useState(true)

  return (
    <div className="app">
      <Header nome={usuario.nome} saldoVisivel={visivel} onToggle={() => setVisivel(!visivel)} />
      <main>
        <Saldo saldo={conta.saldo} visivel={visivel} />
        <AcoesRapidas />
        <Cartao fatura={conta.faturaAtual} limite={conta.limiteDisponivel} visivel={visivel} />
        <Extrato itens={transacoes} visivel={visivel} />
      </main>
    </div>
  )
}
