function Footer() {
    return (
        <>
        <div className="flex flex-col max-w-6xl mx-auto py-10 px-5 bg-green-500">
            <div className="flex justify-between items-center bg-[url('/kefir.png')]">
                <div className="flex flex-col gap-4">
                    <h1 className="text-6xl text-green-700 font-bold">ОСТАЛИСЬ <br /> ВОПРОСЫ?</h1>
                    <p className="text-xl text-green-600 font-medium">Заполните небольшую заявку <br /> и мы свяжемся с вами <br /> в течении 2х рабочих дней </p>
                </div>
                <div>
                    <form className="flex flex-col gap-5 items-center justify-center" name="request">
                        <input className="w-80 h-15 p-5 bg-gray-200 rounded-xl" type="text" placeholder="ВАШЕ ИМЯ" />
                        <input className="w-80 h-15 p-5 bg-gray-200 rounded-xl" type="number" placeholder="НОМЕР ТЕЛЕФОНА" />
                        <button className="w-80 h-15 bg-green-600 rounded-xl text-white cursor-pointer">Отправить заявку</button>
                    </form>
                </div>
            </div>
            <div>
            </div>
        </div>
        </>
    );
}

export default Footer;