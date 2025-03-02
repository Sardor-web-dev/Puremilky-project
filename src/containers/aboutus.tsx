const About = () => {
    return (
        <div className="flex flex-col mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-green-700 font-bold text-center sm:text-left">
                    О нашей <br className="hidden sm:block" /> компании
                </h1>
                <button className="bg-green-600 text-white text-sm sm:text-base w-full sm:w-36 h-12 sm:h-15 rounded-xl mt-4 sm:mt-0">
                    Подробнее
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-7 justify-center my-8">
                <div className="w-full sm:w-1/2 flex justify-center">
                    <img className="w-full max-w-md sm:max-w-lg h-auto rounded-lg shadow-md" src="/youtube.png" alt="Видео о компании" />
                </div>

                <div className="flex flex-col gap-4 sm:w-1/2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-green-600 font-bold text-center sm:text-left">
                        Группа компаний <br className="hidden sm:block" /> «Siyob»
                    </h1>
                    <p className="text-sm sm:text-base text-center sm:text-left">
                        Группа компаний «Siyob» - многопрофильный холдинг по производству и реализации товаров
                        народного потребления, на протяжении 10 лет на рынке Узбекистана. Одной из компаний в составе
                        холдинга стала компания «PureMilky Works».
                    </p>
                    <p className="text-sm sm:text-base text-center sm:text-left">
                        «PureMilky Works» – самый крупный молочный завод в Узбекистане. Специализируется на
                        производстве натуральной молочной и масложировой продукции. Основанное в 2013 году,
                        предприятие имеет в составе молочный и масложировой заводы.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
