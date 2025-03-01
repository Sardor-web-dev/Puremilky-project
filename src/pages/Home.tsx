import Main from "../containers/main-container";
import News from "../containers/news";
import Products from "../containers/production";
import Profits from "../containers/profits";

const Home = () => {
    return (
        <>
        <Main />
        <Products/>
        <Profits/>
        <News/>
        </>
    );
}
 
export default Home;