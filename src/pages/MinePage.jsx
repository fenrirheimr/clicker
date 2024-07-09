import { ComboCard, ComboNotification, InfoSection, Notification, WrapperPage } from "../components";


const MinePage = () => {
    return (
        <WrapperPage>
            <Notification coin={'5 000 000'} />
            <ComboNotification />
            <div className="flex justify-between w-full gap-3 mt-3">
                <ComboCard />
                <ComboCard />
                <ComboCard />
            </div>
            <InfoSection />
        </WrapperPage>
    );
};

export default MinePage;
