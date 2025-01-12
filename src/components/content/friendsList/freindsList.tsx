import css from './friendsList.module.css'

type FriendsListProps = {
    friendsList: {
        avatar: string;
        name: string;
        isOnline: boolean;
        id: number;
    }[];
}

export const FriendsList = ({ friendsList }: FriendsListProps) => {
    return (
        <ul className={css.friendList}>
            {friendsList.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={css.item}>
                    <span className={isOnline ? css.status + " " + css.online : css.status + " " + css.offline}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}