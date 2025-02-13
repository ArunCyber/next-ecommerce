import Layout from '../app/layout'

import InnerPagesBanner from '@/components/InnerPagesBanner';
import ShopPage from '@/components/shop/ShopPage';
// import InnerPagesBanner from '@/components/InnerPagesBanner';

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.in/api/products');
    const allProductsData = await res.json();
  
    return {
        props: {
            allProductsData,
        },
    };
}

export default function Shop({ allProductsData }) {

    // const products = fetch('https://fakestoreapi.in/api/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json.products))
let ggg = allProductsData.products;
    return (
        <Layout>
            <InnerPagesBanner />
            <ShopPage products={ggg} />
        </Layout>
    )
}

