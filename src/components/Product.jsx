import React from "react";

function Product(props) {
  function add() {
    props.addToCart(props.data);
  }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price}-</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt={props.data.productdisplayname} />
      <button onClick={add}>Add to basket</button>
    </article>
  );
}

/* 
{
  "id": 1528,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Jackets",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Sports",
  "productdisplayname": "Black Fleece Jacket",
  "price": 3999,
  "discount": 49,
  "brandname": "Puma",
  "soldout": 0
}
*/


export default Product;
