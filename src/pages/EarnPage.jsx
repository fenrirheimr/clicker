import { Title, DailyTasks, ListTasks, Logo, WrapperPage } from "../components";
import {SubPage, DailyTaskSubPage} from "./index.js";
import {useState} from "react";

const EarnPage = () => {
    const [isShow, setIsShow] = useState(false)
    const [isDailyShow, setIsDailyShow] = useState(false)
    return (
        <WrapperPage>
            <Logo width={200} />
            <Title fontSize="5xl">Earn more coins</Title>
            <DailyTasks click={setIsDailyShow}/>
            <ListTasks  click={setIsShow}/>
            <SubPage click={setIsShow} isShow={isShow}/>
            <DailyTaskSubPage click={setIsDailyShow} isShow={isDailyShow}/>
        </WrapperPage>
    );
};

export default EarnPage;
