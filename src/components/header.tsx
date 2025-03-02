import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    return (
        <>
        <div className="flex h-25 justify-between items-center p-5 bg-green-600 text-white ">
            <div>
                <img onClick={() => navigate('/')} className="w-22 h-20 cursor-pointer" src="/logo.png" alt="" />
            </div>
            <img className="flex md:hidden lg:hidden" src="/menu.svg" alt="" />
            <div className="hidden md:gap-2 md:flex md:items-center lg:gap-4 lg:flex lg:items-center">
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="/">Главная</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="/catalogue">Продукция</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="">О компании</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="">Рецепты</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="">Блог</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold" to="">Контакты</Link>
                <Link className="hover:text-yellow-400 hover:underline hover:font-bold flex items-center" to = ''>Вакансии <span className="bg-yellow-500 rounded-full text-white px-2 ml-1">2</span></Link>
            </div>
            <div className="hidden  md:gap-1 md:flex md:items-center  lg:gap-3 lg:flex lg:align-center lg:justify-center">
                <p>UZB</p>
                <p className="text-yellow-400 font-bold">RUS</p>
                <p>ENG</p>
            </div>
        </div>
        </>
    );
}

export default Header;

