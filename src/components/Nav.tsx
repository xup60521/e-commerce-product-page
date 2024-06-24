import Logo from "@/assets/images/logo.svg?react";
import { IoCartOutline } from "react-icons/io5";
import Avatar from "@/assets/images/image-avatar.png";

export default function Nav() {
    return (
        <nav className="w-full flex items-center gap-12 border-b-[1px] border-e_grayish_blue">
            <Logo />
            {["Collection", "Men", "Women", "About", "Contact"].map((item) => (
                <button
                    key={item}
                    className="h-full py-12 transition border-b-2 border-transparent hover:border-e_orange font-kumbh text-e_dark_grayish_blue hover:text-black"
                >
                    {item}
                </button>
            ))}
            <div className="flex-grow"></div>
            <button className="transition hover -mr-2">
                <IoCartOutline className="transition size-7 text-e_dark_grayish_blue hover:text-e_very_dark_blue" />
                <span className="sr-only">shopping cart</span>
            </button>
            <div className="rounded-full aspect-square size-10 hover:ring-2 transition cursor-pointer ring-e_orange">
                <img src={Avatar} alt="avatar" className="" />
            </div>
        </nav>
    );
}
