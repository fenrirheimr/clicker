import { Clicker, Icons, Notification, Ripple, WrapperPage } from "../components";
import { useState, useEffect } from "react";
import { Notcoin } from '../notcoin'
import {SubPage} from "./index.js";
const defaultEnergy = 2000;
const tg = window.Telegram.WebApp
tg.expand()
//Создал переменную так как не знаю это дата с бэка будет приходит или статическая будет
const id = '286133104'
// const id = tg?.initDataUnsafe?.user?.id

import axios from 'axios'

const HomePage = () => {
    // const [coin, setCoin] = useState(0);
    
    const [appState, setAppState] = useState();
    const [balnce, setBalnce] = useState();
    const [limit, setLimit] = useState();
    const [energy, setEnergy] = useState();
    const [now, setTime] = useState();



    useEffect(() => {
        // localStorage.removeItem("energy");
        axios.get(`https://telegrams.su/api/api/user-data?user_id=${id}`).then((resp) => {
          const user = resp.data;
          setAppState(user);
          setBalnce(user.balance_personal)
          setLimit(user.limit)

          if (localStorage.getItem('energy') === null) {
            localStorage.setItem('energy', user.limit);
          }

          setEnergy(JSON.parse(localStorage.getItem('energy')))

        });
    }, [setAppState]);
    
    useEffect(() => {
        if (energy < 1000) {
            let data = new Date();
            setTime(data.getTime())
            const timer = setInterval(() => {
                const en = JSON.parse(localStorage.getItem('energy'))
                localStorage.setItem('energy', en + 1)
                setEnergy(JSON.parse(localStorage.getItem('energy')))
                console.log('>>>>', now)
            }, 1000);

            
            // setTime(now)
            // const second = 1000;
            // const minute = 2 * second;
            // let expiryTime = new Date(now.getTime() + 2 * minute);
            // console.log('>>>>', now.getTime())
            
            return () => clearInterval(timer);
        }
    });

    

    const onHandleChangeEnergyAndCoin = () => {
        if (energy !== 0) {
            const en = JSON.parse(localStorage.getItem('energy'))
            localStorage.setItem('energy', en - 1)
            setEnergy(JSON.parse(localStorage.getItem('energy')))


            axios.post('https://telegrams.su/api/api/update-personal-balance', {
                "user_id": id,
                "amount": 1,
                "daily": false
              })
            .then((resp) => {
                setBalnce(resp.data.personal_balance)
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
                    <span className="font-bold">/{limit}</span>
                    <Icons.LightningIcon />
                </p>
            </div>
        </WrapperPage>
    );
};

export default HomePage;
