import Nav from "./components/Nav";
import Product from "./components/Product";

export default function App() {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center lg:px-[10vw]">
            <Nav />
            <Product />
        </div>
    );
}
