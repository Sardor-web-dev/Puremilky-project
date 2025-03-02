import { useEffect } from "react";
import Footer from "../components/footer";
import About from "../containers/aboutus";
import Main from "../containers/main-container";
import News from "../containers/news";
import Products from "../containers/production";
import Profits from "../containers/profits";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
        <Main />
        <Products/>
        <Profits/>
        <News/>
        <About/>
        <Footer/>
        </>
    );
}
 
export default Home;