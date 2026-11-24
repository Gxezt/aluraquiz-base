const acoes = [
  { icone: '⇄', nome: 'Área Pix' },
  { icone: '▤', nome: 'Pagar' },
  { icone: '↗', nome: 'Transferir' },
  { icone: '↙', nome: 'Depositar' },
  { icone: '◎', nome: 'Recarga' },
]

export function AcoesRapidas() {
  return (
    <nav className="acoes" aria-label="Ações rápidas">
      {acoes.map((a) => (
        <button key={a.nome} className="acao">
          <span className="acao-icone">{a.icone}</span>
          <span className="acao-nome">{a.nome}</span>
        </button>
      ))}
    </nav>
  )
}
