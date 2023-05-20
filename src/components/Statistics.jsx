import PropTypes from "prop-types"

import css from "../styles/Stats.module.css"

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.statistics_title}>{title}</h2>)}
            <ul className={css.statistics_stat_list}>
                {stats.map(stat => (
                    <li key={stat.id} className={css.statistics_stat_item}>
                        <span className="label">{stat.label}</span>
                    <span className="percentage">{stat.percentage}%</span>
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