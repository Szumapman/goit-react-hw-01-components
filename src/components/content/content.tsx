import { Profile } from "./profile/profile"
import user from '../../data/user.json'
import { Statistics } from "./statistics/statistics"
import statistics from '../../data/data.json'
import { FriendsList } from "./friendsList/freindsList"
import friends from '../../data/friends.json'
import { Transactions } from "./transactions/transactions"
import transactions from '../../data/transactions.json'

type  ContentProps = {
    currentContent: string;
}

export const Content = ({ currentContent }: ContentProps) => {
    const contents: { [key: string]: JSX.Element } = {
        profile: <Profile user={user} />,
        statistics: <Statistics statistics={statistics} />,
        friendsList: <FriendsList friendsList={friends} />,
        transactions: <Transactions transactions={transactions } />,
    }

    return (
        <div>
            {contents[currentContent as keyof typeof contents]}
        </div>
    )
}