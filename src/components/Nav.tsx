import Logo from "@/assets/images/logo.svg?react";
import { IoCartOutline } from "react-icons/io5";
import Avatar from "@/assets/images/image-avatar.png";
import Menu from "@/assets/images/icon-menu.svg?react";
import { Fragment, useMemo, useState } from "react";
import type { NavOpen } from "@/utils";
import { useCartItem } from "./CartItemProvider";
import TrashCan from "@/assets/images/icon-delete.svg";

export default function Nav(props: {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<NavOpen>>;
}) {
    const { setIsMenuOpen } = props;
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useCartItem();
    const total = useMemo(()=>{
        let t = 0
        cartItems.forEach(item => {
            t += item.quantity
        })
        return t
    }, [cartItems])
    return (
        <Fragment>
            <nav
                className={`w-full flex items-center lg:gap-12 gap-8 lg:border-b-[1px] border-e_grayish_blue lg:p-0 py-6 px-6 transition bg-white`}
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
                <button
                    className="transition hover -mr-2 relative"
                    onMouseDown={() => setOpenCart(!openCart)}
                >
                    <IoCartOutline className="transition size-7 text-e_dark_grayish_blue hover:text-e_very_dark_blue" />
                    <span className="sr-only">shopping cart</span>
                    {total !== 0 && <span className="absolute font-kumbh text-[0.5rem] rounded-full px-[5px] -translate-y-7 bg-e_orange text-white h-3">{total}</span>}
                </button>
                <div className="rounded-full aspect-square lg:size-10 size-8 hover:ring-2 transition cursor-pointer ring-e_orange">
                    <img src={Avatar} alt="avatar" className="" />
                </div>
            </nav>
            {openCart && (
                <div className="absolute w-[90vw] shadow-xl lg:w-96 lg:right-16 rounded-lg bg-white flex flex-col z-50 top-24">
                    <div className="border-b-[1px] border-e_grayish_blue px-6 pt-4 pb-8">
                        <span className="font-kumbh font-bold">Cart</span>
                    </div>
                    <div className="p-6 flex flex-col">
                        {cartItems.map((item) => (
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.photo}
                                    alt="item photo"
                                    className="size-10 rounded"
                                />
                                <div className="flex flex-col flex-grow">
                                    <span className="font-kumbh text-e_dark_grayish_blue">
                                        {item.name}
                                    </span>
                                    <p className="font-kumbh text-e_dark_grayish_blue">
                                        {`${item.price.toFixed(2)} x ${
                                            item.quantity
                                        } `}
                                        <span className="font-bold text-black">{`$${(
                                            item.price * item.quantity
                                        ).toFixed(2)}`}</span>
                                    </p>
                                </div>
                                <button
                                    onMouseDown={() =>
                                        setCartItems((prev) => [
                                            ...prev.filter(
                                                (d) => d.name !== item.name
                                            ),
                                        ])
                                    }
                                >
                                    <img src={TrashCan} />
                                    <span className="sr-only">delete item</span>
                                </button>
                            </div>
                        ))}
                        {cartItems.length !== 0 && (
                            <button className="w-full bg-e_orange text-black font-kumbh rounded-lg p-4 font-bold mt-6">
                                Checkout
                            </button>
                        )}
                        {cartItems.length === 0 && (
                            <div className="py-12 flex justify-center items-center">
                                <span className="font-kumbh">
                                    Your cart is empty.
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Fragment>
    );
}
