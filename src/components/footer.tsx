function Footer() {
    return (
        <>
            <div className="flex justify-between mx-auto gap-77 max-w-5xl p-10 rounded-xl items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl text-green-700 font-bold">ОСТАЛИСЬ <br /> ВОПРОСЫ?</h1>
                    <p className="text-xl text-green-600 font-medium">Заполните небольшую заявку <br /> и мы свяжемся с вами <br /> в течении 2х рабочих дней </p>
                </div>
                    <form className="flex flex-col gap-5 items-center justify-center" name="request">
                        <input className="w-80 h-15 p-5 bg-gray-200 rounded-xl" type="text" placeholder="ВАШЕ ИМЯ" />
                        <input className="w-80 h-15 p-5 bg-gray-200 rounded-xl" type="tel" placeholder="НОМЕР ТЕЛЕФОНА" />
                        <button className="w-80 h-15 bg-green-600 rounded-xl text-white cursor-pointer">Отправить заявку</button>
                    </form>
            </div>
        <div className="flex flex-col gap-10 bg-green-500">
            <div className="bg-[url('/kefir.png')] h-40 bg-cover"></div>
            <div className=" bg-green-500 flex w-full h-70 justify-between items-center px-10 gap-10">
                <div>
                    <img src="/logo.png" alt="" />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-white">Меню</h1>
                    <div className="flex gap-10">
                    <div className="flex flex-col gap-2 text-white font-medium text-xl ">
                    <p>Продукция</p>
                    <p>Рецепты</p>
                    <p>Блог</p>
                    </div>
                    <div className="flex flex-col gap-2 text-white font-medium text-xl ">
                    <p>О компании</p>
                    <p>Вакансии</p>
                    <p>Контакты</p>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-white text-2xl font-bold">Контактная информация</h1>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2 text-white font-medium text-xl">
                        <div>
                            <p>Поддержка</p>
                            <span>98 180-66-55</span>
                        </div>
                        <div className="my-">
                            <img className="w-25" src="/image.png" alt="" />
                        </div>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium text-xl">
                            <p>Электронная почта:</p>
                            <span>98 180-66-55</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;