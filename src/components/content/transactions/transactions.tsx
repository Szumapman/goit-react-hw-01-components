import css from './transactions.module.css'

type TransactionsProps = {
    transactions: {
        id: string;
        type: string;
        amount: string;
        currency: string;
    }[];
}

export const Transactions = ({ transactions }: TransactionsProps) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}