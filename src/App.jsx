import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "./components";
import Navbar from "./components/GlobalComponents/Navbar/Navbar";

const AirDropPage = lazy(() => import("./pages/AirdropPage"));
const EarnPage = lazy(() => import("./pages/EarnPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MinePage = lazy(() => import("./pages/MinePage"));
const SubPage = lazy(() => import("./pages/SubPage"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <HomePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/mine"
                    element={
                        <Suspense fallback={<Loading />}>
                            <MinePage />
                        </Suspense>
                    }
                />
                <Route
                    path="/friends"
                    element={
                        <Suspense fallback={<Loading />}>
                            <FriendsPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/earn"
                    element={
                        <Suspense fallback={<Loading />}>
                            <EarnPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/airdrop"
                    element={
                        <Suspense fallback={<Loading />}>
                            <AirDropPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/sub"
                    element={
                        <Suspense fallback={<Loading />}>
                            <SubPage />
                        </Suspense>
                    }
                />
            </Routes>
            <Navbar />
        </BrowserRouter>
    );
}
export default App;
