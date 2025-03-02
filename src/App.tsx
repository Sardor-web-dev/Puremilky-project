// import { Routes } from "react-router-dom"
// import { useEffect } from "react"
// import { useState } from "react";
import Catalogue from "./pages/Catalogue";
// import Home from "./pages/Home";

// interface product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
// }

function App() {

  // const [products, setProduct] = useState<product[]>([]);

  // useEffect(() =>{
  //   fetch('https://dummyjson.com/products')
  // .then((res) => res.json())
  // .then((res) => setProduct(res.products));
  // })

  return (
    <>
    {/* <Home/> */}
    <Catalogue/>
  {/* <Header/>
      <div className="bg-gray-100 grid grid-cols-3 gap-10 p-10">
        {products.map((product) => (
          <div key={product.id} className = 'flex flex-col gap-5 align-center justify-center rounded-lg shadow-md '>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <img className="w-100 h-100" src={product.thumbnail} alt={product.title} />
          </div>
        ))}
      </div> */}
    </>
  )
}

export default App

