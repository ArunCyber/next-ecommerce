import Layout from '../app/layout'

import InnerPagesBanner from '@/components/InnerPagesBanner';
import ShopPage from '@/components/shop/ShopPage';
// import InnerPagesBanner from '@/components/InnerPagesBanner';

export default function Shop(req, res) {

    // const products = fetch('https://fakestoreapi.in/api/products')
    //         .then(res=>res.json())
    //         .then(json=>console.log(json.products))

    return (
        <Layout>
            <InnerPagesBanner />
            <ShopPage />
        </Layout>
    )
}