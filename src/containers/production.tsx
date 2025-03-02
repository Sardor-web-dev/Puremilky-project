import { useNavigate } from "react-router-dom";
import Milks from "../components/puremilky";

const Products = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white p-8 max-w-6xl mx-auto mt-20">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-5xl font-bold text-green-700">
                    Продукция <br /> <span className="text-green-500">Puremilky</span>
                </h1>
                <div className="text-gray-600 text-lg text-right">
                    Молочная продукция <br />
                    уникального производства <br />
                    по лучшим рецептам
                </div>
                <button onClick={() => navigate('/catalogue')} className="bg-green-600 text-white cursor-pointer w-55 h-15 rounded-lg :hover:bg-green-900">
                    Открыть каталог
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <Milks/>
            </div>
            <div className="flex flex-col items-center mt-10">
                <div className=" w-full flex justify-between items-center">
                    <h1 className="text-green-700 text-5xl font-bold">О нашей <br />Компании</h1>
                    <span>Puremilky - молочная продукция фермерского производства, <br /> изготавливается согласно <br />
                        требованиям европейского качества</span>
                </div>
            </div>
            <div className="mt-50 flex gap-25 ">
                <div className="flex gap-30 ">
                <div className="flex flex-col items-center">
                    <h2 className="text-green-700 text-5xl font-bold">10m</h2>
                    <p className="text-gray-700 text-xl">Продуктов произведено</p>
                </div>
                    <div className="flex flex-col my-50">
                    <h2 className="text-green-700 text-5xl font-bold">23</h2>
                    <p className="text-gray-700 text-xl">
                        Крупных городов СНГ <br /> пользуются продукцией Puremilky
                    </p>
                </div>
                </div>
                
                <div className="flex gap-30">
                <div className="flex flex-col ">
                    <h2 className="text-green-700 text-5xl font-bold">10 000</h2>
                    <p className="text-gray-700 text-xl">
                        Магазинов Узбекистана <br /> продают товары от Puremilky
                    </p>
                </div>
                    <div className="flex flex-col my-50 ">
                        <h2 className="text-green-700 text-5xl font-bold">10m</h2>
                        <p className="text-gray-700 text-xl">Постоянных покупателей продукции Puremilky</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;





