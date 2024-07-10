import { Icons, Title } from "../components";

const SubPage = ({isShow, click}) => {
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 100,
                transition: "0.8s",
                top: isShow === true ? "30vh" : "100vh"
            }}

            className="flex items-center flex-col  w-[100vw] h-full mt-3 bg-[#0B1B28]  rounded-[22px] pb-3  border-t-8 border-solid  border-[#24acce] px-5  gap-1 text-white">
            <div className="-mt-8">
                <Icons.TelegramIcon size={250}/>
            </div>
            <Title fontSize="3xl">Sub to us on Telegram</Title>
            <button className="bg-[#50BAD8] rounded-3xl btn py-3 px-10 text-center text-lg mt-4">Subscribe</button>
            <span className="mt-5 flex items-center gap-2 text-lg">
                    +5 000 <Icons.CircleMiniIcon/>
                </span>
            <button className="bg-[#194754]  rounded-3xl  py-3 px-10 text-center mt-4" onClick={() => {click(false)}}>Check it</button>
        </div>
    );
};

export default SubPage;
