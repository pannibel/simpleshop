import React from "react";

function Product(props) {
  return (
    <article className="Product">
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}-</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt={props.productdisplayname} />
      <button>Add to basket</button>
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
