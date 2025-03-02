import {  Products } from "../utils/products.ts";

interface product {
    id: number;
    title: string;
    description: string;
    image: string;
}


const Product = () => {
    return (
        <>
            {Products.map((product: product) => (
                <div key={product.id} className="bg-white my-5 rounded-2xl overflow-hidden shadow-[0px_3px_10px_rgb(0,0,0,0.2)]">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-80"
                    />
                    <div className="flex justify-between items-center bg-green-600 p-4 text-white">
                        <div>
                        <span className="text-2xl">{product.title}</span>
                        <p>{product.description}</p>
                        </div>
                        <img className="w-5 h-8 cursor-pointer" src="/arrow.png" alt="" />
                    </div>
                </div>
            ))}
        </>
    );
}
export default Product;