const News = () => {
    return (
        <>
        <div className="flex flex-col p-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-green-700 font-bold text-center sm:text-left">
                    Новости <br className="hidden sm:block" /> и акции
                </h1>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mt-4 sm:mt-0">
                    <span className="text-center sm:text-left text-sm sm:text-base w-full sm:w-64">
                        Puremilky - молочная продукция фермерского производства, <br className="hidden sm:block" />
                        изготавливается согласно требованиям европейского качества
                    </span>
                    <div className="flex gap-2 sm:gap-4">
                        <img className="w-8 sm:w-10 cursor-pointer" src="/left.png" alt="Previous" />
                        <img className="w-8 sm:w-10 cursor-pointer" src="/right.png" alt="Next" />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-55 p-5">
                <div className="flex flex-col gap-5 my-15 p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="bg-yellow-400 w-40 h-10 rounded-4xl flex items-center justify-center font-bold">
                        <p>Акция</p>
                    </div>
                    <h1 className="text-5xl text-green-700 font-bold">Выиграйте Malibu <br />при покупке <br />молока</h1>
                    <span>Покупайте молоко и получите <br /> возможность выиграть <br /> 
                    Chevrolet Malibu</span>
                <button className="bg-green-600 text-white w-50 h-12 rounded-xl p-2 text-center">Заполнить анкету</button>
                </div>

                <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:my-15 lg:p-5 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                    <div className="bg-yellow-400 w-40 h-10 rounded-4xl flex items-center justify-center font-bold">
                        <p>Акция</p>
                    </div>
                    <h1 className="text-5xl text-green-700 font-bold">Выиграйте Malibu <br />при покупке <br />молока</h1>
                    <span>Покупайте молоко и получите <br /> возможность выиграть <br /> 
                    Chevrolet Malibu</span>
                <button className="bg-green-600 text-white w-50 h-12 rounded-xl p-2 text-center">Заполнить анкету</button>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default News;
