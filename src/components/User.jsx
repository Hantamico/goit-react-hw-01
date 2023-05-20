import PropTypes from "prop-types"
import style from "../styles/User.module.css"

export default function User({ userName, userTag, userLocation, userAvatar, followers, views, likes }) {
    return (
    <div className={style.profile}>
        <div className={style.user_description}>
            <img
            src={userAvatar}
            alt="User avatar"
            className={style.avatar}
            />
            <p className={style.user_name}>{userName}</p>
            <p className={style.user_tag}>@{userTag}</p>
            <p className={style.user_location}>{userLocation}</p>
        </div>

        <ul className={style.user_stats}>
            <li className={style.stats_item}>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li className={style.stats_item}>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li className={style.stats_item}>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>
    );
}

User.propTypes = {
    userName: PropTypes.string,
    userTag: PropTypes.string,
    userLocation: PropTypes.string,
    userAvatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};