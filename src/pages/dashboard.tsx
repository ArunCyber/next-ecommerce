import React from "react";


export default function Dashboard({products}) {
  console.log(products.products)
      // return (
      //   <>
      //   {products}
      //   </>
      // );
}
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.in/api/products');
  const products = await res.json();

  return {
      props: {
          products,
      },
  };
}