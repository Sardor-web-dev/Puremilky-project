import Header from "../components/header";
import Product from "../components/product";

function MainCatalogue() {
    return (
        <>
            <div className="relative w-full flex flex-col gap-5 p-5 h-200 bg-[url('/catalogue-image.svg')] bg-no-repeat bg-cover bg-center">
            <Header />
            <div className="relative flex flex-col gap-2 items-center my-5 h-full text-center text-white">
                <h1 className="text-8xl font-bold">Каталог нашей продукции</h1>
                <div className="flex my-5 gap-10 items-center justify-center ">
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Все</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Молоко</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Сырки</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Сыры</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Сметана, Каймак, Сливки</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Йогурты</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Кисломолочная продукция</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline text-xl">Масло</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-5 p-5">
                <Product/>
            </div>
        </div>
        </>
    );
}

export default MainCatalogue;