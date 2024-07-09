const ComboNotification = () => {
    return (
        <div className=" w-full mt-3 bg-[#0B1B28]  rounded-full py-3  border-t-[6px] border-solid border-[#eca275] px-4  flex items-center justify-between gap-3 text-white">
            <h3 className="font-semibold">Collect</h3>
            <div className="flex gap-1 items-center justify-center">
                <div className="w-4 h-4 bg-[#0B1B28] rounded-full border-2 border-solid border-[#eca275]"></div>
                <div className="w-4 h-4 bg-[#0B1B28] rounded-full border-2 border-solid border-[#eca275]"></div>
                <div className="w-4 h-4 bg-[#0B1B28] rounded-full border-2 border-solid border-[#eca275]"></div>
            </div>
            <button className="bg-custom-gradient rounded-3xl px-2 py-1 text-sm ">+5 000 000</button>
        </div>
    );
};

export default ComboNotification;
