import React from 'react';
import "./Product.css"

const Product = ({ product }) => {
    // console.log(product)
    const { name, img,ram,os,screensize } = product;
    return (
        <div className='box'>
            <h1>{name}</h1>
            <h2>Ram: {ram}</h2>
            <h3>OS: {os}</h3>
            <h4>Screen-size: {screensize}</h4>
            <img src={img} alt="" />



        </div>
    );
};

export default Product;