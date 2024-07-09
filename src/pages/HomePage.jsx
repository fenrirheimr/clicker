import { Clicker, Icons, Notification, Ripple, WrapperPage } from "../components";
import { useState, useEffect } from "react";
import { Notcoin } from '../notcoin'
import {SubPage} from "./index.js";
const defaultEnergy = 2000;
const tg = window.Telegram.WebApp
// tg.expand()
//Создал переменную так как не знаю это дата с бэка будет приходит или статическая будет
const id = '286133104'
// const id = tg?.initDataUnsafe?.user?.id

import axios from 'axios'

const HomePage = () => {
    const [coin, setCoin] = useState(0);
    const [energy, setEnergy] = useState(10);

    const [appState, setAppState] = useState();
    const [balnce, setBalnce] = useState();


    useEffect(() => {
        // const id = tg?.initDataUnsafe?.user?.id
        
        axios.get(`https://telegrams.su/api/api/user-data?user_id=${id}`).then((resp) => {
          const user = resp.data;
          setAppState(user);
          setBalnce(user.balance_personal)

          alert('>>>', tg)

        });
    }, [setAppState]);

    const onHandleChangeEnergyAndCoin = () => {
        if (energy !== 0) {
            // console.log('>>>')
            setCoin((prev) => prev + 1);
            setEnergy((prev) => prev - 1);

            axios.post('https://telegrams.su/api/api/update-personal-balance', {
                "user_id": id,
                "amount": 1
              })
            .then((resp) => {
                setBalnce(resp.data.personal_balance)
                console.log(resp.data.personal_balance);
                return appState
            });
        }
    };

    return (
        <WrapperPage style={'overflow-x:hidden'}>
            <Notification coin={balnce} />
            <div className="max-w-96 flex flex-col items-center justify-center">
                <Notcoin
                    canIClickPlease={true}
                    sleep={false}
                    funMode={false}
                    clickValue={1}
                    cooldown={0}
                    onHandleChangeEnergyAndCoin={onHandleChangeEnergyAndCoin}
                    handleClick={() => {onHandleChangeEnergyAndCoin()}}
                />
                {/*<Clicker onHandleChangeEnergyAndCoin={onHandleChangeEnergyAndCoin}>*/}
                {/*    <Ripple color={`${energy !== 0 ? "#1fecf9" : "red"}`} duration={2000} />*/}
                {/*</Clicker>*/}
                
                {/* {tg?.initDataUnsafe?.user?.id} */}
                <p className="flex text-white text-2xl items-center pb-5 mt-3">
                    <span className="font-medium">{energy}</span>
                    <span className="font-bold">/{defaultEnergy}</span>
                    <Icons.LightningIcon />
                </p>
            </div>
        </WrapperPage>
    );
};

export default HomePage;
