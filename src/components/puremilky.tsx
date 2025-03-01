import { Production, product } from "../utils/productionArr.ts";

const Milks = () => {
    return (
        <>
                        {Production.map((product: product) => (
                    <div key={product.id} className="bg-white my-5  rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={product.Image}
                            alt={product.name}
                            className="w-full h-60 object-cover"
                        />
                        <div className="flex justify-between items-center bg-green-600 p-4 text-white">
                            <span className="text-2xl">{product.name}</span>
                            <img className="w-5 h-8 cursor-pointer" src="/arrow.png" alt="" />
                        </div>
                    </div>
                ))}
        </>
    );
}
 
export default Milks;
