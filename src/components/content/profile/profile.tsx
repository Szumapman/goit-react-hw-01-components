import css from './profile.module.css'

type ProfileProps = {
   user: {
        username: string;
        tag: string;
        location: string;
        avatar: string;
        stats: {
            followers: number;
            views: number;
            likes: number;
        };
    };
};
  
export const Profile = ({ user }: ProfileProps) => {
    const { username, tag, location, avatar, stats } = user;
    const  { followers, views, likes } = stats;
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Followers</span>
                    <span className={css.statsItemQuantity}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Views</span>
                    <span className={css.statsItemQuantity}>{views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsItemTitle}>Likes</span>
                    <span className={css.statsItemQuantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}