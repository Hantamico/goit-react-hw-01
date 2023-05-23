import PropTypes, { bool, number, string } from "prop-types"
import css from "./Friends.module.css"

export default function Friends({friends}) {
    return (
        <ul className={css.friends_list}>
                {friends.map(({id, avatar, name, isOnline}) => (
                    <li key={id} className={css.friends_item}>
                        {isOnline ? <span className={css.is_online}></span> :<span className={css.is_offline}></span> }
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                ))}
            </ul>
    )
};

Friends.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    })),
}