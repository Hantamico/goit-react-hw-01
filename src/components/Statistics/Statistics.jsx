import PropTypes from "prop-types"

import css from "./Stats.module.css"

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.statistics_title}>{title}</h2>)}
            <ul className={css.statistics_stat_list}>
                {stats.map(({id, label, percentage}) => (
                    <li key={id} className={css.statistics_stat_item}>
                        <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
                ))}
            </ul>
            </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};