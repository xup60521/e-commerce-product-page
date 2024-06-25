import Logo from "@/assets/images/logo.svg?react";
import { IoCartOutline } from "react-icons/io5";
import Avatar from "@/assets/images/image-avatar.png";
import Menu from "@/assets/images/icon-menu.svg?react";
import { Fragment } from "react";
import type { NavOpen } from "@/utils";

export default function Nav(props: {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<NavOpen>>;
}) {
    const { setIsMenuOpen } = props;
    return (
        <Fragment>
            <nav
                className={`w-full flex items-center lg:gap-12 gap-8 lg:border-b-[1px] border-e_grayish_blue lg:p-0 py-4 px-6 transition bg-white`}
            >
                <button
                    className="lg:hidden block -mr-4 translate-y-[2px]"
                    onMouseDown={(e) => {
                        setIsMenuOpen("open");
                        e.stopPropagation();
                    }}
                >
                    <span className="sr-only">open menu</span>
                    <Menu />
                </button>
                <Logo />
                {["Collection", "Men", "Women", "About", "Contact"].map(
                    (item) => (
                        <button
                            key={item}
                            className="h-full py-12 transition border-b-2 border-transparent hover:border-e_orange font-kumbh text-e_dark_grayish_blue hover:text-black lg:block hidden"
                        >
                            {item}
                        </button>
                    )
                )}
                <div className="flex-grow"></div>
                <button className="transition hover -mr-2">
                    <IoCartOutline className="transition size-7 text-e_dark_grayish_blue hover:text-e_very_dark_blue" />
                    <span className="sr-only">shopping cart</span>
                </button>
                <div className="rounded-full aspect-square lg:size-10 size-8 hover:ring-2 transition cursor-pointer ring-e_orange">
                    <img src={Avatar} alt="avatar" className="" />
                </div>
            </nav>
        </Fragment>
    );
}
