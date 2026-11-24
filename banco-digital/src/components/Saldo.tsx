import { formatarBRL } from '../data/mock'

type Props = { saldo: number; visivel: boolean }

export function Saldo({ saldo, visivel }: Props) {
  return (
    <section className="card-section">
      <p className="label">Conta</p>
      <p className="valor-grande">{visivel ? formatarBRL(saldo) : '••••••'}</p>
    </section>
  )
}
