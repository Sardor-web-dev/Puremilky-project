const News = () => {
    return (
        <>
        <div className="flex flex-col p-8 max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-6xl text-green-700 font-bold">Новости <br /> и акции</h1>
                <div className="flex items-center gap-5">
                <span className="text-left w-65">Puremilky - молочная продукция фермерского производства, изготавливается согласно 
                требованиям европейского качества</span>
                <img className="w-10" src="/public/left.png" alt="" />
                <img className="w-10" src="/public/right.png" alt="" />
                </div>
            </div>
            <div className="flex items-center gap-55">
                <div className="flex flex-col gap-5 my-15 border-2 p-5">
                    <div className="bg-yellow-400 w-40 h-10 rounded-4xl flex items-center justify-center font-bold">
                        <p>Акция</p>
                    </div>
                    <h1 className="text-5xl text-green-700 font-bold">Выиграйте Malibu <br />при покупке <br />молока</h1>
                    <span>Покупайте молоко и получите <br /> возможность выиграть <br /> 
                    Chevrolet Malibu</span>
                <button className="bg-green-600 text-white w-50 h-12 rounded-xl p-2 text-center">Заполнить анкету</button>
                </div>

                <div className="flex flex-col gap-5 my-15 border-2 p-5">
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