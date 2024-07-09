import { friendList } from "../../../constants";
import { Title, ListFriendCard } from "../../index";

const ListFriend = () => {
    return (
        <div className="mt-3 w-full">
            <Title fontSize="2xl">A list of your friends (3)</Title>
            <div>
                {friendList.map((friend) => (
                    <ListFriendCard key={friend.id} data={friend} />
                ))}
            </div>
        </div>
    );
};

export default ListFriend;
