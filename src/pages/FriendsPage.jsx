import { GiftBox, ListFriend, SubTitle, Title, WrapperPage } from "../components";
import { bonusForTasks } from "../constants";

const FriendsPage = () => {
    return (
        <WrapperPage>
            <Title fontSize="5xl">Invite friends!</Title>
            <SubTitle>You and your friend will receive bonuses</SubTitle>
            {bonusForTasks.map((bonus) => (
                <GiftBox key={bonus.id} data={bonus} />
            ))}
            <ListFriend />
        </WrapperPage>
    );
};

export default FriendsPage;
