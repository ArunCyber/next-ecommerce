import Layout from '../app/layout'

import InnerPagesBanner from '@/components/InnerPagesBanner';
import ShopPage from '@/components/shop/ShopPage';

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.in/api/products');
    const apiData = await res.json();

    const res1 = await fetch('https://fakestoreapi.in/api/products?limit=5');
    const productBrands = await res1.json();

    const res2 = await fetch('https://fakestoreapi.in/api/products/category');
    const productCats = await res2.json();
  
    return {
        props: {
            apiData,
            productBrands,
            productCats
        },
    };
}


export default function Shop({ apiData, productBrands, productCats }) {
let productData = apiData.products;
    return (
        <Layout>
            <InnerPagesBanner />
            <ShopPage products={productData} brands={productBrands} categories={productCats} />
        </Layout>
    )
}

