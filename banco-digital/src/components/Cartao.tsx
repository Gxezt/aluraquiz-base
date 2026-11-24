import { formatarBRL } from '../data/mock'

type Props = { fatura: number; limite: number; visivel: boolean }

export function Cartao({ fatura, limite, visivel }: Props) {
  const esconder = (v: number) => (visivel ? formatarBRL(v) : '••••')
  return (
    <section className="card-section">
      <p className="label">Cartão de crédito</p>
      <p className="sub">Fatura atual</p>
      <p className="valor-medio">{esconder(fatura)}</p>
      <p className="sub">Limite disponível de {esconder(limite)}</p>
    </section>
  )
}
