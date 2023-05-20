import PropTypes from "prop-types"
import css from "../styles/Friends.module.css"

export default function Friends({friends}) {
    return (
        <ul className={css.friends_list}>
                {friends.map(friend => (
                    <li key={friend.id} className={css.friends_item}>
                        <span className={css.friend_status}></span>
                        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                        <p className="name">{ friend.name}</p>
                    </li>
                ))}
            </ul>
    )
};

Friends.propTypes = {
    friend: PropTypes.arrayOf(PropTypes.object),
}