import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import LeftAside from "../components/layout-components/LeftAside";
import RightAside from "../components/layout-components/RightAside";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <Latest></Latest>
                </section>
            </header>
            <nav className=" w-11/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="grid grid-cols-12 w-11/12 mx-auto gap-5">
                <aside className="col-span-3">
                    <LeftAside></LeftAside>
                </aside>
                <main className="col-span-6">
                    <Outlet></Outlet>
                </main>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;