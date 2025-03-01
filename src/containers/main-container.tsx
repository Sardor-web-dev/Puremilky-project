import Header from "../components/header";

function Main() {
    return (
        <>
            <div className="relative w-full p-5 h-200 bg-[url('/main-bg.png')] bg-no-repeat bg-cover bg-center">
            <Header />
            <div className="relative flex flex-col gap-2 items-center my-5 h-full text-center text-green-700">
                <h1 className="text-8xl font-bold">PUREMILKY</h1>
                <h2 className="text-2xl font-semibold mt-2">МОЛОЧНАЯ ПРОДУКЦИЯ</h2>
                <h3 className="text-xl font-medium">ВЫСШЕГО КАЧЕСТВА</h3>
            </div>
        </div>
        </>
    );
}

export default Main;