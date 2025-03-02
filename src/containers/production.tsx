import { useNavigate } from "react-router-dom";
import Milks from "../components/puremilky";

const Products = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-4 mt-10 lg:bg-white lg:p-8 lg:max-w-6xl lg:mx-auto lg:mt-20">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-6">
                <h1 className="text-5xl font-bold text-green-700">
                    Продукция <br /> <span className="text-green-500">Puremilky</span>
                </h1>
                <div className="text-gray-600 text-lg text-right">
                    Молочная продукция <br />
                    уникального производства <br />
                    по лучшим рецептам
                </div>
                <button
                    onClick={() => navigate('/catalogue')}
                    className="bg-green-600 text-white cursor-pointer w-[220px] h-[60px] rounded-lg hover:bg-green-900"
                >
                    Открыть каталог
                </button>
            </div>

            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-6">
                <Milks />
            </div>
            <div className="flex flex-col items-center mt-10">
                <div className="w-full flex flex-col lg:flex-row justify-between items-center">
                    <h1 className="text-green-700 text-5xl font-bold">
                        О нашей <br /> Компании
                    </h1>
                    <span className="text-center lg:text-left">
                        Puremilky - молочная продукция фермерского производства, <br />
                        изготавливается согласно требованиям европейского качества
                    </span>
                </div>
            </div>
            <div className="mt-30 flex lg:gap-25 ">
                <div className="flex lg:gap-30 ">
                    <div className="flex flex-col text-center items-center">
                        <h2 className="text-green-700 lg:text-5xl font-bold">10m</h2>
                        <p className="text-gray-700 lg:text-xl">Продуктов произведено</p>
                    </div>
                    <div className="flex flex-col my-50 text-center">
                        <h2 className="text-green-700 lg:text-5xl font-bold">23</h2>
                        <p className="text-gray-700 lg:text-xl">
                            Крупных городов СНГ <br /> пользуются продукцией Puremilky
                        </p>
                    </div>
                </div>

                <div className="flex lg:gap-30">
                    <div className="flex flex-col text-center">
                        <h2 className="text-green-700 lg:text-5xl font-bold">10 000</h2>
                        <p className="text-gray-700 lg:text-xl">
                            Магазинов Узбекистана <br /> продают товары от Puremilky
                        </p>
                    </div>
                    <div className="flex flex-col my-50 text-center">
                        <h2 className="text-green-700 lg:text-5xl font-bold">10m</h2>
                        <p className="text-gray-700 lg:text-xl">Постоянных покупателей продукции Puremilky</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;


