import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
 
    const [products,setProducts]=useState([]);
    const [query,setQuery]=useState("");

    useEffect(()=>{
        fetch('./fackdata.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    return (
        <div>
            <h1>Products</h1>
            <input type="text"
            placeholder='Search'
            onChange={(e)=>setQuery(e.target.value)} />
            {/* {
              console.log(products.filter(product=> product.ram.includes("8")))
            } */}
            {/* <h2>Sort-by: <span>ram 4 GB<input onChange={(e)=>setQuery(e.target.value.includes("ram"))} type="checkbox" name="ram" id="" /></span></h2> */}
            {
                products.filter((product)=> product.name.toLowerCase().includes(query)).map(product =><Product
                key={product.id}
                product={product}></Product>)
            }
        </div>
    );
};

export default Products;