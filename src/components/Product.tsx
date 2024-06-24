import Thumb1 from "@/assets/images/image-product-1-thumbnail.jpg";
import Image1 from "@/assets/images/image-product-1.jpg";
import Thumb2 from "@/assets/images/image-product-2-thumbnail.jpg";
import Image2 from "@/assets/images/image-product-2.jpg";
import Thumb3 from "@/assets/images/image-product-3-thumbnail.jpg";
import Image3 from "@/assets/images/image-product-3.jpg";
import Thumb4 from "@/assets/images/image-product-4-thumbnail.jpg";
import Image4 from "@/assets/images/image-product-4.jpg";
import Plus from "@/assets/images/icon-plus.svg?react";
import Minus from "@/assets/images/icon-minus.svg?react";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
const images = [
    {
        thumbnail: Thumb1,
        lg_photo: Image1,
    },
    {
        thumbnail: Thumb2,
        lg_photo: Image2,
    },
    {
        thumbnail: Thumb3,
        lg_photo: Image3,
    },
    {
        thumbnail: Thumb4,
        lg_photo: Image4,
    },
] as {
    thumbnail: string;
    lg_photo: string;
}[];

type SelectedImage = 0 | 1 | 2 | 3;

export default function Product() {
    const [selectedImage, setSelectedImage] = useState<SelectedImage>(0);
    return (
        <div className="w-full flex lg:flex-row flex-col px-8 py-16">
            <DisplayImages
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            <ProductDetail />
        </div>
    );
}

function ProductDetail() {
    return (
        <div className="flex flex-col lg:w-[60%] justify-center pl-[10%]">
            <span className="font-kumbh text-e_dark_grayish_blue font-semibold tracking-wider py-4 text-sm">
                {"Sneaker Company".toUpperCase()}
            </span>
            <h2 className="text-[2.5rem] font-kumbh font-bold leading-10">
                Fall Limited Edition Sneakers
            </h2>
            <p className="font-kumbh text-e_dark_grayish_blue py-8">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className="flex flex-col gap-2 -mt-2">
                <div className="flex gap-4 items-end">
                    <span className="font-kumbh font-bold text-lg">$125.00</span>
                    <span className="text-xs h-fit font-kumbh bg-black px-2 py-1 rounded-md text-white">50%</span>
                </div>
                <span className="font-kumbh text-xs line-through font-semibold">$250.00</span>
            </div>
            <div className="flex items-center gap-4 py-8">
                <div className="flex items-center overflow-hidden flex-shrink-0 bg-e_light_grayish_blue rounded-lg">
                    <button className="px-3 py-4 transition hover:opacity-50">
                        <Minus />
                        <span className="sr-only">decrement 1 item</span>
                    </button>
                    <span className="px-6 font-kumbh text-black text-sm font-bold">
                        0
                    </span>
                    <button className="px-3 py-4 transition hover:opacity-50">
                        <Plus />
                        <span className="sr-only">increment 1 item</span>
                    </button>
                </div>
                <button className="bg-e_orange flex-grow font-kumbh flex items-center justify-center gap-4 h-full rounded-lg font-bold transition hover:opacity-70">
                    <IoCartOutline />
                    <span className="font-kumbh text-sm">Add to cart</span>
                </button>
            </div>
        </div>
    );
}

function DisplayImages(props: {
    selectedImage: SelectedImage;
    setSelectedImage: React.Dispatch<React.SetStateAction<SelectedImage>>;
}) {
    const { selectedImage, setSelectedImage } = props;
    return (
        <div className="flex flex-col lg:w-[40%] gap-6 flex-shrink-0">
            <img
                src={images[selectedImage]?.lg_photo}
                alt=""
                className="rounded-2xl"
            />
            <div className="grid grid-cols-4 gap-6">
                {images.map((item, index) => (
                    <button
                        className={`rounded-xl overflow-hidden transition ring-2 ${
                            selectedImage === index
                                ? "ring-e_orange"
                                : "ring-transparent"
                        }`}
                        onMouseDown={() =>
                            setSelectedImage(index as unknown as SelectedImage)
                        }
                    >
                        <img
                            src={item.thumbnail}
                            alt={index + " thumbnail"}
                            className={`transition ${
                                selectedImage === index && "opacity-30"
                            }`}
                        />
                        <span className="sr-only">{"photo " + index}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
