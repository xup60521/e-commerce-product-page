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
import { IoClose } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Fragment, useState } from "react";

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
        <div className="w-full flex lg:flex-row flex-col lg:px-8 lg:py-16 bg-white">
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
        <div className="flex flex-col lg:w-[60%] justify-center lg:pl-[10%] px-6 lg:py-0 py-2">
            <span className="font-kumbh text-e_dark_grayish_blue font-semibold tracking-wider py-4 text-sm">
                {"Sneaker Company".toUpperCase()}
            </span>
            <h2 className="lg:text-[2.5rem] text-3xl font-kumbh font-bold leading-10">
                Fall Limited Edition Sneakers
            </h2>
            <p className="font-kumbh text-e_dark_grayish_blue lg:py-8 pt-4 pb-8">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>
            <div className="flex lg:flex-col flex-row lg:items-start items-end justify-between gap-2 lg:-mt-2">
                <div className="flex gap-4 items-end">
                    <span className="font-kumbh font-bold text-lg">
                        $125.00
                    </span>
                    <span className="text-xs h-fit font-kumbh bg-black px-2 py-1 rounded-md text-white">
                        50%
                    </span>
                </div>
                <span className="font-kumbh text-xs line-through font-semibold">
                    $250.00
                </span>
            </div>
            <div className="flex lg:flex-row flex-col items-center gap-4 py-8 pb-20">
                <div className="flex items-center overflow-hidden flex-shrink-0 bg-e_light_grayish_blue rounded-lg lg:w-fit w-full">
                    <button className="px-3 py-4 transition hover:opacity-50">
                        <Minus />
                        <span className="sr-only">decrement 1 item</span>
                    </button>
                    <span className="px-6 font-kumbh text-black text-sm font-bold lg:flex-grow-0 flex-grow text-center">
                        0
                    </span>
                    <button className="px-3 py-4 transition hover:opacity-50">
                        <Plus />
                        <span className="sr-only">increment 1 item</span>
                    </button>
                </div>
                <button className="bg-e_orange flex-grow lg:w-fit w-full font-kumbh flex items-center justify-center gap-4 h-full rounded-lg font-bold transition hover:opacity-70 py-3 drop-shadow-md shadow-e_orange">
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
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    return (
        <Fragment>
            <Lightbox
                isLightboxOpen={isLightboxOpen}
                setIsLightboxOpen={setIsLightboxOpen}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
            <div className="flex flex-col lg:w-[40%] gap-6 flex-shrink-0">
                <button
                    className="lg:rounded-2xl overflow-hidden relative"
                    onMouseDown={() => setIsLightboxOpen(!isLightboxOpen)}
                >
                    <img
                        src={images[selectedImage].lg_photo}
                        alt="preview image"
                        className="lg:aspect-auto aspect-[4/3] object-cover object-center"
                    />
                    <span className="sr-only">open lightbox</span>
                    <button
                            className="absolute left-0 top-[50%] -translate-y-[50%] translate-x-[25%] lg:hidden bg-white size-10 rounded-full flex items-center justify-center text-lg transition hover:text-e_orange"
                            onMouseDown={() =>
                                setSelectedImage(
                                    selectedImage === 0
                                        ? 3
                                        : ((selectedImage - 1) as SelectedImage)
                                )
                            }
                        >
                            <FaChevronLeft />
                            <span className="sr-only">preview image</span>
                        </button>
                        <button
                            className="absolute right-0 top-[50%] -translate-y-[50%] -translate-x-[25%] lg:hidden bg-white size-10 rounded-full flex items-center justify-center text-lg transition hover:text-e_orange"
                            onMouseDown={() =>
                                setSelectedImage(
                                    selectedImage === 3
                                        ? 0
                                        : ((selectedImage + 1) as SelectedImage)
                                )
                            }
                        >
                            <FaChevronRight />
                            <span className="sr-only">next image</span>
                        </button>
                </button>
                <div className="lg:grid grid-cols-4 gap-6 hidden">
                    {images.map((item, index) => (
                        <button
                            key={`imagesdsdasd ${item.lg_photo}`}
                            className={`rounded-xl overflow-hidden transition ring-2 bg-white ${
                                selectedImage === index
                                    ? "ring-e_orange"
                                    : "ring-transparent"
                            }`}
                            onMouseDown={() =>
                                setSelectedImage(
                                    index as unknown as SelectedImage
                                )
                            }
                        >
                            <img
                                src={item.thumbnail}
                                alt={index + " thumbnail"}
                                className={`transition ${
                                    selectedImage === index && "opacity-50"
                                }`}
                            />
                            <span className="sr-only">{"photo " + index}</span>
                        </button>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

function Lightbox(props: {
    isLightboxOpen: boolean;
    setIsLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedImage: SelectedImage;
    setSelectedImage: React.Dispatch<React.SetStateAction<SelectedImage>>;
}) {
    const {
        isLightboxOpen,
        setIsLightboxOpen,
        selectedImage,
        setSelectedImage,
    } = props;
    function StopPropagation(e: React.MouseEvent) {
        e.stopPropagation();
    }
    if (isLightboxOpen) {
        return (
            <div className="lg:flex hidden justify-center items-center flex-col fixed w-screen h-screen bg-black bg-opacity-75 top-0 left-0 z-50" onMouseDown={()=>setIsLightboxOpen(false)}>
                <div className="max-h-full flex flex-col w-[min(32.5vw,40rem)]">
                    <div className="w-full flex justify-end py-2">
                        <button
                            className="text-white text-3xl"
                            onMouseDown={(e) => {
                                setIsLightboxOpen(false);
                                e.stopPropagation();
                            }}
                        >
                            <IoClose className="" fontWeight={"fill"} />
                            <span className="sr-only">close lightbox</span>
                        </button>
                    </div>
                    <div
                        className="relative aspect-square"
                        onMouseDown={StopPropagation}
                    >
                        <img
                            src={images[selectedImage].lg_photo}
                            alt="preview photo"
                            className="rounded-2xl"
                        />
                        <button
                            className="absolute left-0 top-[50%] -translate-y-[50%] -translate-x-[50%] bg-white size-12 rounded-full flex items-center justify-center text-lg transition hover:text-e_orange"
                            onMouseDown={() =>
                                setSelectedImage(
                                    selectedImage === 0
                                        ? 3
                                        : ((selectedImage - 1) as SelectedImage)
                                )
                            }
                        >
                            <FaChevronLeft />
                            <span className="sr-only">preview image</span>
                        </button>
                        <button
                            className="absolute right-0 top-[50%] -translate-y-[50%] translate-x-[50%] bg-white size-12 rounded-full flex items-center justify-center text-lg transition hover:text-e_orange"
                            onMouseDown={() =>
                                setSelectedImage(
                                    selectedImage === 3
                                        ? 0
                                        : ((selectedImage + 1) as SelectedImage)
                                )
                            }
                        >
                            <FaChevronRight />
                            <span className="sr-only">next image</span>
                        </button>
                    </div>
                    <div className="w-full flex flex-row gap-6 flex-shrink-0 min-w-0 justify-center py-8">
                        {images.map((item, index) => {
                            return (
                                <button
                                    key={`lightbox select images ${item.thumbnail}`}
                                    className={`w-[17.5%] rounded-lg overflow-hidden ring-2 bg-white ${
                                        selectedImage === index
                                            ? "ring-e_orange"
                                            : "ring-transparent"
                                    }`}
                                    onMouseDown={(e) => {
                                        setSelectedImage(
                                            index as unknown as SelectedImage
                                        );
                                        e.stopPropagation();
                                    }}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="image thumbnail"
                                        className={`transition ${
                                            selectedImage === index &&
                                            "opacity-30"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}
