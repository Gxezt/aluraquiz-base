import { type Transacao, formatarBRL } from '../data/mock'

type Props = { itens: Transacao[]; visivel: boolean }

export function Extrato({ itens, visivel }: Props) {
  return (
    <section className="card-section">
      <p className="label">Últimas movimentações</p>
      <ul className="extrato">
        {itens.map((t) => (
          <li key={t.id} className="extrato-item">
            <div>
              <p className="extrato-desc">{t.descricao}</p>
              <p className="sub">{t.data}</p>
            </div>
            <span className={t.valor > 0 ? 'entrada' : 'saida'}>
              {visivel ? formatarBRL(t.valor) : '••••'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
