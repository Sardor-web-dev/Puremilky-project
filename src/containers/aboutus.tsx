const About = () => {
    return (
        <>
        <div className="flex flex-col mx-auto  max-w-6xl">
            <div className="flex items-center justify-between">
                <h1 className="text-6xl text-green-700 font-bold">О нашей <br /> компании</h1>
                <button className="bg-green-600 flex items-center justify-center text-white w-30 h-15 rounded-2xl">Подробнее</button>
            </div>
            <div className="flex my-10 items-center gap-7 justify-center">
                <div>
                    <img className="w-800 h-110" src="/youtube.png" alt="" />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl text-green-600 font-bold">Группа компаний <br /> «Siyob»</h1>
                    <p className="text-left">Группа компаний «Siyob» - многопрофильный холдинг по производству и реализации товаров народного потребления, на протяжении 10 лет на рынке Узбекистана. Одной из компаний в составе холдинга стала компания «PureMilky Works»</p>
                    <p className="text-left">«PureMilky Works» самый крупный молочный завод в Узбекистане. Специализируется на производстве натуральной молочной и масложировой продукции. Основанное в 2013 году, предприятие имеет в составе, молочный и масложировой заводы.</p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default About;