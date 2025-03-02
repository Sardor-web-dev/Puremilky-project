import Footer from "../components/footer";
import Header from "../components/header";
import Product from "../components/product";

function MainCatalogue() {
    return (
        <>
            <div className="relative w-full flex flex-col gap-5 h-200 bg-[url('/catalogue-image.svg')] bg-no-repeat bg-cover bg-center">
            <div className="p-5">
                <Header/>
            </div>
            <div className="relative flex flex-col gap-2 items-center my-5 h-full text-center text-white">
                <h1 className="text-3xl lg:text-8xl font-bold">Каталог нашей продукции</h1>
                <div className="grid grid-cols-4 gap-4 lg:flex my-5 lg:gap-10 items-center justify-center ">
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Все</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Молоко</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Сырки</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Сыры</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Сметана, Каймак, Сливки</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Йогурты</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Кисломолочная продукция</p>
                    <p className="cursor-pointer hover:text-yellow-300 hover:underline lg:text-xl">Масло</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4 lg:gap-5 lg:p-5">
                <Product/>
            </div>
            <div className="flex gap-2 lg:gap-5 mb-5 items-center justify-center">
                    <div className="flex gap-2 items-center">
                        <img className="cursor-pointer lg:w-2" src="/left-arrow.svg" alt="" />
                        <p className="lg:text-xl">Предыдущий</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="lg:w-5 lg:text-xl text-center rounded-lg hover:bg-green-400 cursor-pointer ">1</span>
                        <span className="lg:w-5 lg:text-xl text-center rounded-lg hover:bg-green-400 cursor-pointer ">2</span>
                        <span className="lg:w-5 lg:text-xl text-center rounded-lg hover:bg-green-400 cursor-pointer ">3</span>
                        <span className="lg:w-5 lg:text-xl text-center rounded-lg hover:bg-green-400 cursor-pointer ">...</span>
                        <span className="lg:w-5 lg:text-xl text-center rounded-lg hover:bg-green-400 cursor-pointer ">22</span>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <p className="lg:text-xl">Следующий</p>
                        <img className=" lg:w-2 cursor-pointer" src="/right-arrow.svg" alt="" />
                    </div>
                </div>
                <Footer/>
        </div>
        </>
    );
}

export default MainCatalogue;