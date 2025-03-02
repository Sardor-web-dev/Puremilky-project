import Header from "../components/header";

function Main() {
    return (
        <>
            <div className="relative w-full h-[600px] lg:h-[800px]">
            <div className="absolute inset-0 bg-[url('/main-bg.png')] bg-no-repeat bg-cover bg-center p-5">
            <Header />
            <div className="relative flex flex-col gap-2 items-center my-5 h-full text-center text-green-700">
                <h1 className="text-4xl font-bold lg:text-8xl lg:font-bold">PUREMILKY</h1>
                <h2 className="text-xl font-medium mt-1 lg:text-2xl lg:font-semibold lg:mt-2">МОЛОЧНАЯ ПРОДУКЦИЯ</h2>
                <h3 className="lg:text-xl font-medium">ВЫСШЕГО КАЧЕСТВА</h3>
            </div>
            </div>
        </div>
        </>
    );
}

export default Main;
