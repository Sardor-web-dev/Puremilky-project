import MainCatalogue from "../containers/main-catalogue";
import { useEffect } from "react";

const Catalogue = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
        <MainCatalogue/>
        </>
    );
}
 
export default Catalogue;