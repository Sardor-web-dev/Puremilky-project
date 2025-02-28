function Header() {
    return (
        <>
        <div className="flex h-25 justify-between items-center p-5 bg-green-600 text-white ">
            <div>
                <img className="w-22 h-20" src="/public/logo.png" alt="" />
            </div>
            <div className="gap-4 flex align-center justify-center">
                <a className="text-yellow-400 font-bold" href="">Главная</a>
                <a href="">Продукция</a>
                <a href="">О компании</a>
                <a href="">Рецепты</a>
                <a href="">Блог</a>
                <a href="">Контакты</a>
                <a href="">Вакансии <span className="bg-yellow-500 rounded-full px-2 ">2</span></a>
            </div>
            <div className="gap-3 flex align-center justify-center">
                <p>UZB</p>
                <p className="text-yellow-400 font-bold">RUS</p>
                <p>ENG</p>
            </div>
        </div>
        </>
    );
}

export default Header;