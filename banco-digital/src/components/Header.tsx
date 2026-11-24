type Props = { nome: string; saldoVisivel: boolean; onToggle: () => void }

export function Header({ nome, saldoVisivel, onToggle }: Props) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="avatar" aria-hidden>{nome[0]}</div>
        <button className="icon-btn" onClick={onToggle} aria-label={saldoVisivel ? 'Ocultar valores' : 'Mostrar valores'}>
          {saldoVisivel ? '👁' : '🙈'}
        </button>
      </div>
      <h1 className="greeting">Olá, {nome}</h1>
    </header>
  )
}
