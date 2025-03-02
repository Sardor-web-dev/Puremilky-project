const Profits = () => {
    return (
        <div className="bg-white p-8 max-w-3xl mx-auto">
            <h1 className="text-green-700 text-3xl font-bold">ПРЕИМУЩЕСТВА <br /> ПРОДУКТОВ</h1>
            <p className="text-gray-700 mt-2 mb-6">
                Мы используем оптимальную технологию производства молочных изделий, из продуктов которые были 
                выращены в лучших условиях на отдельной ферме
            </p>
            <div className="relative">
                <img src="/cow.png" alt="Коровы на ферме" className="w-full rounded-lg" />

                <div className="absolute top-5 left-5 bg-green-600 text-white p-3 rounded-lg w-56 shadow-lg">
                    <p>Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского</p>
                </div>

                <div className="hidden sm:block absolute top-1/3 right-5 bg-green-600 text-white p-3 rounded-lg w-56 shadow-lg">
                    <p>Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского</p>
                </div>

                <div className="hidden sm:block absolute bottom-1/3 left-5 bg-green-600 text-white p-3 rounded-lg w-56 shadow-lg">
                    <p>Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского</p>
                </div>

                <div className="absolute bottom-5 right-5 bg-green-600 text-white p-3 rounded-lg w-56 shadow-lg">
                    <p>Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского</p>
                </div>
            </div>
        </div>
    );
};

export default Profits;
