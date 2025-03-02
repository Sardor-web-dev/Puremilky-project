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
                    <p>Все</p>
                    <p>Молоко</p>
                    <p>Сырки</p>
                    <p>Сыры</p>
                    <p>Сметана,Каймак,Сливки</p>
                    <p>Йогурты</p>
                    <p>Кисломолочная продукция</p>
                    <p>Масло</p>
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