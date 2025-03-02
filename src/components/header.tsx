import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <>
        <div className="flex h-25 justify-between items-center p-5 bg-green-600 text-white ">
            <div>
                <img onClick={() => navigate('/')} className="w-22 h-20 cursor-pointer" src="/logo.png" alt="" />
            </div>
            <div className="gap-4 flex align-center justify-center">
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="/">Главная</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="/catalogue">Продукция</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="">О компании</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="">Рецепты</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="">Блог</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="">Контакты</a>
                <a className="hover:text-yellow-400 hover:underline hover:font-bold" href="">Вакансии <span className="bg-yellow-500 rounded-full text-white px-2 ">2</span></a>
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