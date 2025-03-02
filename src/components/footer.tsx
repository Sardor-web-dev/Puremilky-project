const Footer = () => {
    return (
        <>
            <div className="flex gap-10 lg:flex-row lg:gap-70 mx-auto max-w-5xl p-6 lg:p-10 rounded-xl items-center shadow-md">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-5xl text-green-700 font-bold">
                        ОСТАЛИСЬ <br className="hidden sm:block" /> ВОПРОСЫ?
                    </h1>
                    <p className="text-lg sm:text-xl text-green-600 font-medium mt-2">
                        Заполните небольшую заявку <br className="hidden sm:block" />
                        и мы свяжемся с вами <br className="hidden sm:block" />
                        в течение 2 рабочих дней
                    </p>
                </div>

                <form className="flex flex-col gap-4 w-full sm:w-auto items-center lg:items-start" name="request">
                    <input className="w-full sm:w-80 h-12 p-4 bg-gray-200 rounded-xl" type="text" placeholder="Ваше имя" />
                    <input className="w-full sm:w-80 h-12 p-4 bg-gray-200 rounded-xl" type="tel" placeholder="Номер телефона" />
                    <button className="w-full sm:w-80 h-12 bg-green-600 rounded-xl text-white cursor-pointer">
                        Отправить заявку
                    </button>
                </form>
            </div>

            <div className="flex flex-col bg-green-500 text-white">
                <div className="bg-[url('/kefir.png')] h-32 sm:h-40 bg-cover"></div>

                <div className="flex flex-col lg:flex-row w-full justify-between items-center px-6 sm:px-10 py-10 gap-10">
                    
                    <div>
                        <img className="max-w-40" src="/logo.png" alt="Логотип" />
                    </div>

                    <div className="flex flex-col text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl font-bold">Меню</h1>
                        <div className="grid grid-cols-2 gap-4 mt-3 text-lg font-medium">
                            <p>Продукция</p>
                            <p>О компании</p>
                            <p>Рецепты</p>
                            <p>Вакансии</p>
                            <p>Блог</p>
                            <p>Контакты</p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl font-bold">Контактная информация</h1>
                        <div className="mt-3 text-lg font-medium">
                            <p>Поддержка: <span className="font-bold">98 180-66-55</span></p>
                            <p className="mt-2">Электронная почта: <span className="font-bold">98 180-66-55</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
