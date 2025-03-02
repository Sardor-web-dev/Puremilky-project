const Profits = () => {
    return (
        <>
            <div className="bg-white p-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-10">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-green-700 text-5xl font-bold">Преимущества <br /> продуктов</h1>
                        <span>Puremilky - молочная продукция фермерского производства, <br /> изготавливается согласно <br />
                            требованиям европейского качества</span>
                    </div>
                    <div className="w-full h-300 bg-[url('/cow.png')] bg-no-repeat bg-cover bg-center my-25 justify-center items-center flex">
                        <div className="flex flex-col gap-40">
                            <div className="flex gap-50">
                            <div className="bg-green-600 text-white w-100 h-35 p-5 rounded-lg">
                                <p className="text-left">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                            </div>
                            <div className="bg-green-600 text-white my-25 w-100 h-35 p-5 rounded-lg">
                                <p className="text-left">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                            </div>
                            </div>
                            <div className="flex gap-50">
                            <div className="bg-green-600 text-white w-100 h-35 p-5 rounded-lg">
                                <p className="text-left">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                            </div>
                            <div className="bg-green-600 my-25 text-white w-100 h-35 p-5 rounded-lg">
                                <p className="text-left">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profits;