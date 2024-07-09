import { Title, DailyTasks, ListTasks, Logo, WrapperPage } from "../components";
import {SubPage} from "./index.js";
import {useState} from "react";

const EarnPage = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <WrapperPage>
            <Logo width={200} />
            <Title fontSize="5xl">Earn more coins</Title>
            <DailyTasks click={setIsShow}  />
            <ListTasks  click={setIsShow}/>
            <SubPage click={setIsShow} isShow={isShow}/>
        </WrapperPage>
    );
};

export default EarnPage;
