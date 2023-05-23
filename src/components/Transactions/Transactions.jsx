import css from './tranactions.module.css'
import PropTypes from "prop-types"

export default function Transactions({ items }) {
    return (
    <table className={css.transaction_history}>
        <thead className={css.t_head}>
            <tr>
                <th className={css.box}>Type</th>
                <th className={css.box}>Amount</th>
                <th className={css.box}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) => (
                <tr key={id} className={css.row}>
                    <td className={css.box}>{type}</td>
                    <td className={css.box}>{amount}</td>
                    <td className={css.box}>{currency}</td>
                </tr>
            ))}        
            
        </tbody>
</table>
        );
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })),
}