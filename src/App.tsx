import { Fragment, useState } from "react";
import Nav from "./components/Nav";
import Product from "./components/Product";
import type { NavOpen } from "./utils";
import { IoClose } from "react-icons/io5";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<NavOpen>("");
    return (
        <Fragment>
            <MobileNavMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <div
                className={`w-full min-h-screen lg:bg-white bg-black flex flex-col transition items-center lg:px-[10vw] ${
                    isMenuOpen === "open" && "opacity-25"
                }`}
                onMouseDown={() => setIsMenuOpen("close")}
            >
                <Nav setIsMenuOpen={setIsMenuOpen} />
                <Product />
            </div>
        </Fragment>
    );
}

function MobileNavMenu(props: {
    isMenuOpen: NavOpen;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<NavOpen>>;
}) {
    const { isMenuOpen, setIsMenuOpen } = props;
    return (
        <div
            className={`fixed lg:hidden flex flex-col bg-white h-full w-[70vw] -left-[70vw] font-kumbh transition z-50 p-6 gap-12 ${
                isMenuOpen === "open"
                    ? " translate-x-[70vw]"
                    : `${isMenuOpen === "close" ? "-translate-x-[70vw]" : ""}`
            }`}
            onMouseDown={(e) => e.stopPropagation()}
        >
            <button
                onMouseDown={() => setIsMenuOpen("close")}
                className="text-2xl text-e_dark_grayish_blue"
            >
                <IoClose className="-translate-x-[5px]" />
                <span className="sr-only">close menu</span>
            </button>
            <div className="flex flex-col gap-8">
                {["Collection", "Men", "Women", "About", "Contact"].map(
                    (item) => (
                        <span key={`mobile nav menu ${item}`} className="font-kumbh font-bold text-lg">{item}</span>
                    )
                )}
            </div>
        </div>
    );
}
